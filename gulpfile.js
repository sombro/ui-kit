var gulp = require('gulp');
var runSequence = require('gulp-run-sequence');
var babel = require('gulp-babel');
var del = require('del');

var paths = {
	all: ['./client/**/*', '!./client/index.js', '!./client/index.scss'],
	library: './library/',
	scripts: ['./library/**/*.js', '!./library/index.js'],
};

// Clear library
gulp.task('clean', function(cb) {
    return del([
    	paths.library + '*',
    	'!' + paths.library + 'index.js',
    	'!' + paths.library + 'package.json'
    ], cb);
});

// Copy all files from components
gulp.task('copy', function() {
	return gulp.src(paths.all)
		.pipe(gulp.dest(paths.library));
});

// Babel ES6
gulp.task('scripts', function() {
	return gulp.src(paths.scripts)
		.pipe(babel())
		.pipe(gulp.dest(function(file) {
		    return file.base;
		}));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', function(cb) {
	runSequence('clean', 'copy', 'scripts', cb);
});
