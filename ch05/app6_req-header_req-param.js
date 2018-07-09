/**
 * Express 의 요청 객체에 추가한 헤더와 파라미터 알아보기
 * 
 * query : 클라이언트에서 GET 방식으로 전송한 요청 파라미터를 확인한다.
 * body : 클라이언트에서 POST 방식으로 전송한 요청 파라미터를 확인한다. 외장모듈을 사용해야한다.
 * header(name) : 헤더를 확인.
 * 
 * http://localhost:3000?name=abcd 로 접속한 경우
 * req.query.name == abcd
 */


var express = require('express');
var http = require('http');

var app = express();


app.use(function(req, res, next){
	console.log('첫 번째 미들웨어에서 요청을 처리함');
	
	var userAgent = req.header('User-Agent');
	var paramName = req.query.name;
	
	res.writeHead(200, { 'Content-Type' : 'text/html;charset=utf8'});
	res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
	res.write('<div><p>User-Agent : ' + userAgent + '</p></div>');
	res.write('<div><p>Param name : ' + paramName + '</p></div>');
	res.end();
});

http.createServer(app).listen(3000, function(){
	console.log('starting Express Server at 3000 port');
});