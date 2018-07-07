/**
 * http://usejsdoc.org/
 */


var fs = require('fs');

fs.mkdir('./docs', function(err){
	if(err) throw err;
	console.log('create new dir');
	
	//*
	fs.rmdir('./docs', function(){
		if(err) throw err;
		console.log('remove dir');
	});
	//*/
});