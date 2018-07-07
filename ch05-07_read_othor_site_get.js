/**
 * 서버에서 다른 웹 사이트의 데이터를 가져와 응답하기 - get
 */


var http = require('http');

// 다른 사이트의 정보
var options = {
		host : 'www.google.com',
		port : 80,
		path : '/'
};

var req = http.get(options, function(res){
	// 응답처리
	var resData = '';
	
	// 데이터를 받고 있는 상태에서는 data 이벤트가 발생
	res.on('data', function(chunk){
		resData += chunk;
	});
	
	res.on('end', function(){
		console.log(resData);
	});
});

req.on('error', function(err){
	console.log('error : ' + err.message);
});