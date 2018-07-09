/**
 * 메모를 기록하고 사진과 함깨 웹 서버로 보내는 기능을 만들어 보세요
 */


var express = require('express');
var http = require('http');
var path = require('path');

var bodyParser = require('body-parser');
var staticPath = require('serve-static');
var errorHandler = require('errorhandler');

var expressErrorHandler = require('express-error-handler');

var multer = require('multer');
var fs = require('fs');

var cors = require('cors');


var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded( { extentded : false } ));
app.use(bodyParser.json());

app.use('/public', staticPath(path.join(__dirname, 'public')));
app.use('/uploads', staticPath(path.join(__dirname, 'uploads')));


app.use(cors());


var storage = multer.diskStorage({
	destination : function(req, file, callback){
		callback(null, 'uploads');
	},
	filename : function(req, file, callback){
		callback(null, Date.now() + file.originalname);
	}
});

var upload = multer({
	storage : storage,
	limits : {
		files : 10,
		fileSize : 1024 * 1024 * 1024
	}
});



var router = express.Router();

router.route('/process/create').get(function(req, res){
	console.log('---- create get');
	res.redirect('/public/memo.html');
});

router.route('/process/create').post(upload.array('file', 1), function(req, res){
	console.log('---- create post');
	
	var name = req.body.name || req.query.name;
	var content = req.body.content || req.query.content;
	
	try{
		var files = req.files;
		var filename = '';
		
		if(Array.isArray(files)){
			for(var i=0; i<files.length ;++i){
				filename = files[i].filename;
			}
		}
		
		res.writeHead('200', { 'Content-Type' : 'text/html;charset=utf8' });
		res.write('<h1>나의 메모</h1>');
		res.write('<br/>');
		res.write('<p>메모가 저장되었습니다.</p>');
		res.write('<p>작성자 : ' + name + '</p>');
		res.write('<p>내용 : ' + content + '</p>');
		res.write('<img src="/uploads/' + filename + '">');
		res.write('<br/>');
		res.write('<a href="/process/create">다시작성</a>');
		res.end();
	}catch(err){
		console.log(err.stack);
	}
});



app.use('/', router);

// 모든 router 처리 끝난 후 404 오류 페이지 처리
var errorHandler = expressErrorHandler({
	static : { '404' : './public/404.html' }
});

app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );

http.createServer(app).listen(3000, function(){
	console.log('start server at 3000 port');
});