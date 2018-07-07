/**
 * http://usejsdoc.org/
 */

var fs = require('fs');

fs.open('./output.txt', 'r', function(err, fd){
	if(err) throw err;
	
	var buf = new Buffer(10);
	
	console.log('buffer type : %s', Buffer.isBuffer(buf));
	
	fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer){
		if(err) throw err;
		
		var inStr = buffer.toString('utf8', 0, bytesRead);
		
		console.log('Read file data : %s', inStr);
		
		console.log(err, bytesRead, buffer);
		
		fs.close(fd, function(){
			console.log('open N read N close - Clear');
		});
	});
});