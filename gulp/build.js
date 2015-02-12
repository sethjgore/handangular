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

gulp.task('styles', function () {
  return gulp.src('app/gallaudet-template/PreBuilt/gstli/{main, front}.scss')
    .pipe($.sass({style: 'expanded'}))
    .on('error', handleError)
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('.tmp/gallaudet-template/PreBuilt/gstli/'))
    .pipe($.size());
});

gulp.task('scripts', function () {
  return gulp.src('app/gallaudet-template/PreBuilt/gstli/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.size());
});

gulp.task('partials', function () {
  return gulp.src('app/partials/**/*.html')
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.ngHtml2js({
      moduleName: 'handangular',
      prefix: 'partials/'
    }))
    .pipe($.concat("partials.min.js"))
    .pipe(gulp.dest('.tmp/partials'))
    .pipe($.size());
});

gulp.task('html', ['styles', 'scripts', 'partials'], function () {
  var jsFilter = $.filter('**/*.js');
  var cssFilter = $.filter('**/*.css');
  var assets;

  return gulp.src('app/*.html')
    .pipe($.inject(gulp.src('.tmp/**/*.js'), {
      read: false,
      starttag: '<!-- inject:partials -->',
      addRootSlash: false,
      addPrefix: '../'
    }))
    .pipe(assets = $.useref.assets())
    .pipe(jsFilter)
    .pipe($.ngAnnotate())
   // .pipe($.uglify({preserveComments: $.uglifySaveLicense}))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe($.replace('bower_components/bootstrap-sass-official/assets/fonts/bootstrap','fonts'))
    .pipe($.csso())
    .pipe(cssFilter.restore())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

gulp.task('images', function () {
  return gulp.src('app/gallaudet-template/Images/**/*')
    .pipe(gulp.dest('dist/gallaudet-template/Images'))
    .pipe($.size());
});

gulp.task('move-gallyblueprint', function () {
  return gulp.src('app/gallaudet-template/PreBuilt/blueprint/**/*')
    .pipe(gulp.dest('dist/gallaudet-template/PreBuilt/blueprint/'))
    .pipe($.size());
});

gulp.task('move-gallyjquery', function () {
  return gulp.src('app/gallaudet-template/PreBuilt/jquery/**/*')
    .pipe(gulp.dest('dist/gallaudet-template/PreBuilt/jquery/'))
    .pipe($.size());
});

gulp.task('move-gallycss', function () {
  return gulp.src('app/gallaudet-template/PreBuilt/gallaudet.css')
    .pipe(gulp.dest('dist/gallaudet-template/PreBuilt/'))
    .pipe($.size());
});

gulp.task('merge-js', function () {
  return gulp.src(['dist/gallaudet-template/PreBuilt/gstli/vendor.js', 'dist/gallaudet-template/PreBuilt/gstli/project.js','dist/gallaudet-template/PreBuilt/gstli/main.js',])
    .pipe($.concat("app.js"))
    .pipe(gulp.dest('dist/gallaudet-template/PreBuilt/gstli/'))
    .pipe($.size());
});

gulp.task('fonts', function () {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff}'))
    .pipe($.flatten())
    .pipe(gulp.dest('dist/fonts'))
    .pipe($.size());
});

gulp.task('clean', function () {
  return gulp.src(['.tmp', 'dist'], { read: false }).pipe($.rimraf());
});

gulp.task('build', ['html', 'images', 'move-gallycss', 'move-gallyjquery', 'move-gallyblueprint', 'merge-js']);
