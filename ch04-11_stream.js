/**
 * 스트림 단위로 파일 읽고 쓰기
 */


var fs = require('fs');

var infile = fs.createReadStream('./output.txt', { flags : 'r'});
var outfile = fs.createWriteStream('./output2.txt', { flags : 'w'});

infile.on('data', function(data){
	console.log('Read data : ', data);
	outfile.write(data);
});

infile.on('end', function(){
	console.log('Read file Finished');
	outfile.end(function(){
		console.log('Write file Finished');
	});
});
