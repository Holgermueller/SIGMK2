const gulp = require('gulp');

const less = require('gulp-less');
const path = require('path');

// compile less files
gulp.task('less', () => {
    return gulp.src('./assets/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./assets/css'));
});