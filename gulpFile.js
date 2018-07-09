var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function(){

	nodemon({
		script: 'new_server.js',
		ext: 'js',
		env: {
			HOST: '127.0.1.10',
			PORT: 8000
		},
		ignore : ['./node_modules/**']		
	})
	.on('restart', function(){

		console.log('Restarted');
		
	});

});
