/**
 * http://usejsdoc.org/
 */

var fs = require('fs');

fs.open('./output.txt', 'w', function(err, fd){
	if(err) throw err;
	
	var buf = new Buffer('ch04-08!');
	
	fs.write(fd, buf, 0, buf.lengt, null, function(err, written, buffer){
		if(err) throw err;
		
		console.log(err, written, buffer);
		
		fs.close(fd, function(){
			console.log('open N write N close - Clear');
		});
	});
});