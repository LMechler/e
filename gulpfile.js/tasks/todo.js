var gulp = require('gulp');
var todo = require('gulp-todo');
var config = require('../config/todo');

// generate a todo.md from your javascript and sass/scss files
gulp.task('todo', function() {
    gulp.src(config.srcJs)
        .pipe(todo())
        .pipe(gulp.dest(config.destJs));
    gulp.src(config.srcSass)
        .pipe(todo())
        .pipe(gulp.dest(config.destSass));
        // -> Will output a TODO.md with your todos
});