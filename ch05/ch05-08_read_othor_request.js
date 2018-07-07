/**
 * 서버에서 다른 웹 사이트의 데이터를 가져와 응답하기 - post
 */


var http = require('http');

var opts = {
		host : 'www.google.com',
		port : 80,
		method : 'POST',
		path : '/',
		headers : {}
};


var resData = '';
var req = http.request(opts, function(res){
	// 응답처리
	res.on('data', function(chunk) {
		resData += chunk;
	});
	
	res.on('end', function(){
		console.log(resData);
	});
});

// 요청파라미터는 요청객체의 data 속성으로 설정
req.data = 'q=actor';
opts.headers['Content-Type'] = 'application/x-www-from-urlencoded';
opts.headers['Content-Length'] = req.data.length;

req.on('error', function(err){
	console.log('error : ' + err.message);
});


req.write(req.data);
req.end();