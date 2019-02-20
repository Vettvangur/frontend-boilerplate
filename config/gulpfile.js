const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprites')

gulp.task('sprites', function () {
  return gulp.src('../assets/svg/*.svg')
      .pipe(svgSprite({
        selector: "icon-%f",
        mode: "symbols",
        preview: false,
      }))
      .pipe(gulp.dest('../build/icons/'));
});
gulp.task('deploy-sprites', function () {
  return gulp.src('../assets/svg/*.svg')
      .pipe(svgSprite({
        selector: "icon-%f",
        mode: "symbols",
        preview: false,
      }))
      .pipe(gulp.dest('../../Hlaup.Site/content/hlaup/icons/'));
});