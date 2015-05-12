var gulp     = require('gulp');
var html     = require('../config/html');
var scripts	 = require('../config/scripts');	
var images   = require('../config/images');
var sass     = require('../config/sass');
var json     = require('../config/json');
var watch    = require('gulp-watch');

gulp.task('watch', ['browserSync'], function() {
  watch(html.watch, function() { gulp.start('html'); });
  watch(sass.watch, function() { gulp.start('sass'); });
  watch(scripts.src, function() { gulp.start('scripts'); });
  watch(images.src, function() { gulp.start('images'); });
  
  watch(json.src, function() { gulp.start('json'); });
  
});
