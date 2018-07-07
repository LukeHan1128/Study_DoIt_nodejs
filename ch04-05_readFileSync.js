/**
 * http://usejsdoc.org/
 */


var fs = require('fs');

// 파일을 동기식 IO 로 읽어들임
var data = fs.readFileSync('./README.md', 'utf8');

// 읽어들인 데이터를 출력
console.log(data);
