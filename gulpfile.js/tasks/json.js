var gulp     	= require('gulp');
var jsonminify 	= require('gulp-jsonminify');
var config      = require('../config/json');
 
gulp.task('json', function () {
    return gulp.src(config.src)
        .pipe(jsonminify())
        .pipe(gulp.dest(config.dest));
});