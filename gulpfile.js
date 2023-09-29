const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

const webp = require('gulp-webp');

function convertImagesToWebP() {
  return gulp.src('./assets/images/*.+(jpg|jpeg|png)')
  .pipe(webp())
  .pipe(gulp.dest('./assets/images'));
}

gulp.task('sass', function () {
  return gulp.src('./assets/scss/*.scss') 
    .pipe(sass()) 
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./assets/css/')); 
});

gulp.task('webp', convertImagesToWebP);

gulp.task('default', gulp.series('sass'));

