/**
 * pipe 를 이용한 스트림 단위로 파일 읽고 쓰기
 * pipe : 두 개의 스트림을 붙여주는 역활을 한다.
 * 해당 예제는 ReadStream 과 WriteStream 을 붙여준다.
 */


var fs = require('fs');

var inname = './output.txt';
var outname = './output2.txt';

fs.exists(outname, function(exists){
	if(exists){
		fs.unlink(outname, function(err){
			if(err) throw err;
			console.log('기존 파일 [' + outname + '] 삭제함');
		});
	}
	
	var infile = fs.createReadStream(inname, { flags : 'r'});
	var outfile = fs.createWriteStream(outname, { flags : 'w'});
	
	infile.pipe(outfile);
	
	console.log('파일 복사 [' + inname + '] -> [' + outname + ']');
});