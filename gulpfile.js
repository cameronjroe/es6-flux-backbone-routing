var gulp = require('gulp');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config');
var webserver = require('gulp-webserver');

gulp.task('webpack', function () {
  return gulp.src(['src/**/*.js', 'src/**/*.jsx'])
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('.'));
});

gulp.task('default', function () {
  gulp.src('.')
    .pipe(webserver({
      livereload: true
    }));
  gulp.watch('*.jsx', ['webpack']);
});