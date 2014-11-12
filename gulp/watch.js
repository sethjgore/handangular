'use strict';

var gulp = require('gulp');

gulp.task('watch', ['wiredep', 'styles'] ,function () {
  gulp.watch('app/gallaudet-template/PreBuilt/gstli/**/*.{scss,sass}', ['styles']);
  gulp.watch('app/gallaudet-template/PreBuilt/gstli/**/*.js', ['scripts']);
  gulp.watch('app/gallaudet-template/Images/gstli/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
});
