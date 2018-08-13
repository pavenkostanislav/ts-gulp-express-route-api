const gulp = require('gulp');
const settings = require('../settings');

gulp.task('copy-fe', function () {
  const from = settings.fePath + '/dist/**/*.*';
  const to = settings.srcBuildPath + '/public';
  return gulp.src(from)
    .pipe(gulp.dest(to));
});