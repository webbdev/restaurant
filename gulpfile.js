var gulp = require('gulp');

// plugins
var wiredep = require('wiredep').stream;
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var rename = require("gulp-rename");
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var minifyCss = require('gulp-minify-css');
var notify = require("gulp-notify");
var watch = require('gulp-watch');
var clean = require('gulp-clean');


// CSS autoprefixer, minify
gulp.task('css:prefix', function () {
  return gulp.src('css/style.css')
	.pipe(autoprefixer({
	  browsers: ['last 10 versions'],
	  cascade: false
	}))
	.pipe(gulp.dest('css/'))
	.pipe(notify({ message: 'css:prefix task complete' }));
});


// JS concat, minify, rename
/*gulp.task('js:build', function() {
  return gulp.src('./js/*.js')
  	.pipe(jshint())
    .pipe(jshint.reporter('default'));
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./build/js'))
    .pipe(notify({ message: 'js:build task complete' }));
});


gulp.task('html', function () {
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss()))
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'html task complete' }));
});
*/

// HTML minify
//gulp.task('html:min', function() {
  //return gulp.src('dist/*.html')
   // .pipe(htmlmin({collapseWhitespace: true}))
   // .pipe(rename({ suffix: '.min' }))
   // .pipe(gulp.dest('dist/'))
   // .pipe(notify({ message: 'html:min task complete' }));
//});


// Watch
/*gulp.task('watch', function() {
  Watch .html files
  gulp.watch('dist/*.html', ['html:min']);
}); */


gulp.task('dist', ['css:prefix', 'watch']);