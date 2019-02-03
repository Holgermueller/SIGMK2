const gulp = require('gulp');
const terser = require('gulp-terser');
const uglify = require('gulp-uglifyes');

// uglify js files
function es() {
  return gulp.src('./public/js/currentWeather/currentWeather.js')
  .pipe(uglify())
  .pipe(gulp.dest('./public/js/bundle/'));
}

// // watch files for changes
// gulp.task('watch', () => {
//     gulp.watch('./public/assets/**/*.less', ['less']).on('change', bs.reload);
//     gulp.watch('./public/assets/**/*.css', ['minify-css']).on('change');
//     gulp.watch('./js/**/*.js', ['uglify']).on('change');
// });

// set default tasks
gulp.task('default', es);
