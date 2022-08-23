const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const compileSass = () => gulp
  .src('./styles.scss')
  .pipe(sass({ includePaths: ['node_modules'] }).on('error', sass.logError))
  .pipe(gulp.dest('./'));

const watchStyles = () => gulp.watch('./*.scss', gulp.series(compileSass));

const gulpCompile = gulp.parallel(compileSass);
const gulpWatch = gulp.parallel(watchStyles);
const gulpDev = gulp.series(gulpCompile, gulpWatch);

gulp.task('default', gulpCompile);
gulp.task('watch', gulpDev);