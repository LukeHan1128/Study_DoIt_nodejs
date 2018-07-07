/**
 * http://usejsdoc.org/
 */

var fs = require('fs');

// 파일에 데이터를 쓴다.
fs.writeFile('./output.txt', 'Hello world!\nHello World!', function(err){
	if(err) console.log('error : ' + err);
	
	console.log('write complete');
});