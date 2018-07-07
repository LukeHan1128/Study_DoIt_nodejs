/**
 * 클라이언트가 웹 서버에 요청할 때 발생하는 이벤트 처리하기
 */


var port = 3000;
var http = require('http');
var server = http.createServer();

server.listen(port, function(){
	console.log(' ---- start server');
});

server.on('connection', function(socket){
	var addr = socket.address();
	console.log(' ---- connection client : %s, %d', addr.address, addr.port);
});

server.on('request', function(req, res){
	console.log(' ---- pushed client request');
//	console.dir(req);
	
	res.writeHead(200, { "Content-Type" : "text/html; charset=utf-8" });
	res.write("<!DOCTYPE html><head><title>응 답페이지</title></head><body><h1>응답페이지</h1></body></html>");
	res.end();
});

server.on('close', function(){
	console.log(' ---- closed server');
});