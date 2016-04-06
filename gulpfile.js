var gulp = require('gulp');
var runSequence = require('gulp-run-sequence');
var clean = require('gulp-clean');
var babel = require('gulp-babel');

var paths = {
	all: './client/components/**/*',
	library: './library/src/',
	scripts: './library/src/**/*.js',
};

// Clear library
gulp.task('clean', function () {
	return gulp.src(paths.library, {read: false})
		.pipe(clean());
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
