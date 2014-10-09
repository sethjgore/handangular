'use strict';


//todo fix 'CANNOT FIND RELATIVE' error

var gulp = require('gulp');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license']
});

function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}

gulp.task('move', function () {
  return gulp.src('app/gallaudet-template')
    .pipe(gulp.dest('dist/gallaudet-template'))
    .pipe($.size());
});


gulp.task('move', ['move']);
