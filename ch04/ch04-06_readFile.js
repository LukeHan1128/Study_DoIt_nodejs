/**
 * http://usejsdoc.org/
 */


var fs = require('fs');

// 파일을 비동기식 IO 로 읽어들임
fs.readFile('./README.md', 'utf8', function(err, data){
	// 읽어들인 데이터를 출력
	console.log('1111');
	console.log(data);
	console.log('2222');
});

console.log('프로젝트 폴더안의 README.md 파일을 읽도록 요청');