/**
 * http://usejsdoc.org/
 */


var url = require('url');

// 주소 문자열을 URL 객체로 만들기
// 구글검색
// var curURL = url.parse('https://www.google.co.kr/search?newwindow=1&hl=ko&tbm=isch&source=hp&biw=1920&bih=974&ei=RFlAW_jzPIjT0ASYjYzYAQ&q=고양이&oq=고양이&gs_l=img.3...7588.8222.0.8366.10.9.0.0.0.0.0.0..0.0....0...1ac.1j4.64.img..10.0.0.0...0.I_P8BeuyF_Y');
// 예제
var curURL = url.parse('https://m.search.naver.com/search.naver?query=steve+jobs&here=m&sm=mtp_hty');

// URL 객체를 문자열로 만들기
var curStr = url.format(curURL);

console.log('주소 문자열 : %s', curStr);
console.dir(curURL);

console.log();
console.log();

console.log('주소 query : %s', curURL.query);

console.log();
console.log();


// 안됨..
var querystring = require('querystring');
var param = querystring.parse(curURL.query);

console.log('요청 파라미터 중 query 의 값 : %s', param.query);
console.log('원본 요청 파라미터 : %s', querystring.stringify(param));