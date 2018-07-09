/**
 * body-parser 미들웨어
 */


var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var staticPath= require('serve-static');

var app = express();

app.set('port', process.env.PORT || 3000);

// body-parser 를 사용해 application/x-www-from-urlencoded 파싱
app.use(bodyParser.urlencoded( { extended : false }));

// body-parser 를 사용해 application/json 파싱
app.use(bodyParser.json());

app.use(staticPath(path.join(__dirname, 'public')));

app.use(function(req, res, next){
	console.log('첫 번째 미들웨어에서 요청을 처리함');
	
	var paramId = req.body.id || req.query.id;
	var paramPassword = req.body.password || req.query.password;
	
	res.writeHead(200, { 'Content-Type' : 'text/html;charset=utf8'});
	res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
	res.write('<div><p>User-Agent : ' + paramId + '</p></div>');
	res.write('<div><p>Param name : ' + paramPassword + '</p></div>');
	res.end();
});

http.createServer(app).listen(3000, function(){
	console.log('starting Express Server at 3000 port');
});