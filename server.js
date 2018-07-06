// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
  res.render('templates/uq/ca/v1/login/index/index.ejs',
    { 
      public: function(file) {
        return `public/uq/ca/v1${file}`;
      },
      error: {},
      loginId: '123123',
      _csrf: '',
      resolver: {
        absPathFor: function(path) {
          return path;
        }
      }
    }
  );
});

app.listen(1111);