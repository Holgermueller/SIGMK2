const gulp = require('gulp');
const less = require('gulp-less');
const bs = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;

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
    gulp.src('./public/assets/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./assets'));
});

// clean up css
gulp.task('minify-css', () => {
    gulp.src('./public/assets/**/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./assets'));
});

// uglify js files
gulp.task('uglify', () => {
    gulp.src('./js/forecast/forecast.js')
        .pipe(rename('forecast.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/forecast/'));
});

// watch files for changes
gulp.task('watch', () => {
    gulp.watch('./public/assets/**/*.less', ['less']).on('change', bs.reload);
    gulp.watch('./public/assets/**/*.css', ['minify-css']).on('change');
    gulp.watch('./js/**/*.js', ['uglify']).on('change');
});

// set default tasks
gulp.task('default', ['browser-sync', 'watch']);
