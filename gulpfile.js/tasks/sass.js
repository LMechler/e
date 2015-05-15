var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');

var config = require('../config/sass');




gulp.task('sass', function () {
    return sass('src/assets/stylesheets/master.scss') 
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.dest))
    .pipe(rename(config.rename))
    .pipe(minifycss())
    .pipe(gulp.dest(config.dest));
});