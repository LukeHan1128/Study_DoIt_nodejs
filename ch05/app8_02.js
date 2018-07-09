/**
 * URL 파라미터 사용하기
 * 
 * /process/login/:name == /process/login 뒤에 오는 값은 파라미터로 처리하겠다는 의미
 * 이렇게 저장한 파라미터는 req.params 객체 안에 들어간다
 * 따라서 :name 으로 표시된 부분에 넣어 전달된 값은 req.params.name 속성으로 접근할 수 있습니다
 */


var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var staticPath= require('serve-static');

var app = express();
var router = express.Router();

app.set('port', process.env.PORT || 3000);

// body-parser 를 사용해 application/x-www-from-urlencoded 파싱
app.use(bodyParser.urlencoded( { extended : false }));

// body-parser 를 사용해 application/json 파싱
app.use(bodyParser.json());

app.use(staticPath(path.join(__dirname, 'public')));


router.route('/process/login/:name').post(function(req, res){
	console.log('/process/login/:name 처리함');
	
	var paramId = req.body.id || req.query.id;
	var paramPassword = req.body.password || req.query.password;
	
	res.writeHead(200, { 'Content-Type' : 'text/html;charset=utf8'});
	res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
	res.write('<div><p>Param name : ' + paramId + '</p></div>');
	res.write('<div><p>Param id : ' + paramId + '</p></div>');
	res.write('<div><p>Param password : ' + paramPassword + '</p></div>');
	res.write('<div><a hrep="/public/login3.html">로그인 페이지로 돌아가기</a></div>');
	res.end();
});

app.use('/', router);


http.createServer(app).listen(3000, function(){
	console.log('starting Express Server at 3000 port');
});