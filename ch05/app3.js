/**
 * 미들웨어로 클라이언트에 응답보내기 - 다중미들웨어
 * 
 * 미들웨어를 사용하기 위해 먼저 use() 메소드를 호출해야하며,
 * 미들웨어를 여러개 등록하는 경우 클라이언트에서 요청이 들어오면 미들웨어 함수는 순서대로 실행된다.
 * next() 함수를 호출하면 다음 미들웨어로 넘어간다.
 */


var express = require('express');
var http = require('http');

var app = express();


app.use(function(req, res, next){
	console.log('첫 번째 미들웨어에서 요청을 처리함');
	
	req.user = 'mike';
	
	next();
});

app.use('/', function(req, res, next){
	console.log('두 번째 미들웨어에서 요청을 처리함');
	
	res.writeHead('200', { 'Content-Type' : 'text/html;charset=utf8' });
//	res.end('<h1>Express 서버에서 ' + req.user + '가 응답한 결과입니다.</h1>');
	
	next();
});

app.use('/', function(req, res, next){
	console.log('세 번째 미들웨어에서 요청을 처리함');
	
	res.write('<h1>Express 서버에서 ' + req.user + '가 응답한 결과입니다.</h1>');
	
	next();
});

app.use('/', function(req, res, next){
	console.log('네 번째 미들웨어에서 요청을 처리함');
	
	res.end();
});

http.createServer(app).listen(3000, function(){
	console.log('starting Express Server at 3000 port');
});