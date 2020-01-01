'use strict';

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('pages/login');
    });

    app.get('/index', function(req, res) {
        res.render('pages/index');
    });

    app.get('/tables', function(req, res) {
        res.render('pages/tables');
    });  
};