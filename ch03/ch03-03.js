/**
 * http://usejsdoc.org/
 */

console.log(' -- 순서 01');

function add (a ,b, callback){
	console.log(' -- 순서 03');
	
	var result = a + b;
	callback(result);
	
	console.log(' -- 순서 06');
	
	var cnt = 0;
	
	var history = function(){
		console.log(' -- 순서 09');
		return (++cnt) + ' : ' + a + ' + ' + b + ' = ' + result;
	}
	console.log(' -- 순서 07');
	
	return history;
}

console.log(' -- 순서 02');

var add_history = add(10, 20, function(result){
	console.log(' -- 순서 04');
	console.log('파라미터로 전달된 콜백 함수 호출됨' );
	console.log('더하기 (10, 20)의 결과 : %d', result);
	console.log(' -- 순서 05');
});

console.log(' -- 순서 08');
console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history());
console.log(' -- 순서 10');
console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history());
console.log(' -- 순서 11');
console.log('결과 값으로 받은 함수 실행 결과 : ' + add_history());
console.log(' -- 순서 12');