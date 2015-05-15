var gulp = require('gulp');
// var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var config = require('../config/scripts');

gulp.task('scripts', function() {
  return gulp.src(config.src)
//    .pipe(jshint())
//    .pipe(jshint.reporter('default'))
    .pipe(concat('master.js'))
    .pipe(gulp.dest(config.dest))
    .pipe(rename(config.rename))
    .pipe(uglify())
    .pipe(gulp.dest(config.dest));
});