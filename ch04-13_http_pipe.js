/**
 * http 모듈로 요청받은 파일 내용을 읽고 응답하기
 * 해당 url로 들어오면 output.txt 를 읽어들여 보여준다
 */


var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res){
	// 파일을 읽어 응답 스트림과 pipe() 로 연결
	var instream = fs.createReadStream('./output.txt');
	instream.pipe(res);
});

server.listen(7001, '127.0.0.1');