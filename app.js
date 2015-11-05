
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , index = require('./routes/index')
  , mysql = require('./routes/mysql');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
app.get('/', routes.index);
app.get('/home',routes.index);
app.get('/bigdata',user.bigdata);
app.get('/blogpage',user.blogpage);
app.get('/contactus',user.contactus);
app.get('/downloadpage',user.downloadpage);
app.get('/iotpage',user.iotpage);
app.get('/locations',user.locations);
app.get('/management',user.management);
app.post('/downloadFormInfo',user.downloadFormInfo);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
