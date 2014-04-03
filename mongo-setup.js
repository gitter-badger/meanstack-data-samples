var Db = require('mongodb').Db,
  Server = require('mongodb').Server,
  db = new Db('meanstack-test', new Server('localhost', 27017), {w: 1}),
  newCollection = 'components',
  collection = {};

db.open(function (err, db) {
  if (err) {
    console.error(err);
    return false;
  }

  // drop collection if it already exists
  db.dropCollection(newCollection, function () {
    console.log('collection dropped: ' + newCollection);
  }());

  // instantiate new collection
  var collection = db.collection(newCollection);
  console.log('collection created: ' + newCollection);

  // populate new collection
  collection.insert([
    { 'component': 'mongod', 'description': 'core database process' },
    { 'component': 'mongos', 'description': 'controller and query router for sharded clusters' },
    { 'component': 'mongo', 'description': 'interactive MongoDB Shell' },
    { 'component': 'mongodump', 'description': 'utility for creating binary export of database contents' },
    { 'component': 'mongorestore', 'description': 'writes data from a binary database dump to a MongoDB instance' },
    { 'component': 'mongooplog', 'description': 'polls operations from the replication oplog' }
  ], function (err, result) {

    db.close();

    if (err) {
      console.error(err);
      return false;
    }

    console.log('documents created: ' + result.length);
  });
});
