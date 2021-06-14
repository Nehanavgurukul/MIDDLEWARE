// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//    res.cookie('name', 'express').send('cookie set'); //Sets name = express
// });

// app.listen(3000);






var express = require('express');
var app = express();

app.get('/clear_cookie_foo', function(req, res){
   res.clearCookie('foo');
   res.send('cookie foo cleared');
});

app.listen(3000);