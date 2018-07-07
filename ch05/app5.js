/**
 * Express 의 요청 객체와 응답 객체 알아보기 - redirect()
 * 
 * send([body]) : 클라이언트에 응답 데이터를 보낸다. 전달할 수 있는 데이터는 HTML 문자열, Buffer 객체, JSON 객체, JSON 배열 이다.
 * status(code) : HTTP 상태의 코드를 반환. 상태코드는 end() 나 send() 같은 전송 메소드를 추가로 호출해야 전송할 수 있다.
 * sendStatus(statusCode) : HTTP 상태코드를 반환. 상태코드는 상태메시지와 함께 전송된다.
 * redirect([status,] path) : 웹 페이지 경로를 강제로 이동시킨다.
 * render(view [, locals, callback]) : 뷰 엔진을 사용해 문서를 만든 후 전송
 * 
 * 
 */


var express = require('express');
var http = require('http');

var app = express();


app.use(function(req, res, next){
	console.log('첫 번째 미들웨어에서 요청을 처리함');
	
	res.redirect('http://google.co.kr');
});

http.createServer(app).listen(3000, function(){
	console.log('starting Express Server at 3000 port');
});