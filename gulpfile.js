const gulp = require('gulp');
const less = require('gulp-less');
const bs = require('browser-sync').create();

// set up browser-sync
gulp.task('browser-sync', () => {
    bs.init({
        server: {
            baseDir: './',
        },
    });
});

// compile less files
gulp.task('less', () => {
    return gulp.src('./assets/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./assets'));
});

// watch files for changes
gulp.task('watch', () => {
    gulp.watch('./assets/**/*.less', ['less']).on('change', bs.reload);
});

// set default tasks
gulp.task('default', ['browser-sync', 'watch']);
