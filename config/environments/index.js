module.exports = function(app) {
    require('./development')(app);
    require('./test')(app);
    require('./production')(app);
};

//console.log('Reading index.js');