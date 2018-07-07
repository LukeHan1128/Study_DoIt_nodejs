/**
 * express 로 웹 서버 만들기
 */


var express = require('express');
var http = require('http');

var app = express();


// env : 서버 모드를 설정
// views : 뷰들이 들어있는 폴더 또는 폴더배열을 설정
// view engine : 디폴트로 사용할 뷰 엔진을 설정. ejs 나 pug를 많이 사용.

// process.env 객체에 PORT 속성이 있으면 그 속성을 사용, 없으면 3000번을 사용
app.set('port', process.env.PORT || 3000);

// app.get('port') == 포르 속성을 꺼내온다
http.createServer(app).listen(app.get('port'), function(){
	console.log(' ---- start express server : ' + app.get('port'));
});