/**
 * 클라이언트가 웹 서버에 요청할 때 발생하는 이벤트 처리하기
 * image 파일을 읽어서 클라이언트에 전송
 */


var port = 3000;
var http = require('http');
var server = http.createServer();
var fs = require('fs');

server.listen(port, function(){
	console.log(' ---- start server');
});

server.on('connection', function(socket){
	var addr = socket.address();
	console.log(' ---- connection client : %s, %d', addr.address, addr.port);
});

server.on('request', function(req, res){
	console.log(' ---- pushed client request');
	
	var img = "C:/Users/LimitationOne/Downloads/1514742566882.GIF";
	
	fs.readFile(img, function(err, data){
		if(err) throw err;
		
		res.writeHead(200, { "Content-Type" : "image/png" });
		res.write(data);
		res.end();
	});
	
});

server.on('close', function(){
	console.log(' ---- closed server');
});