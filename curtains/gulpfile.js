'use strict';
const
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();




gulp.task('styles', function () {
    return gulp.src("dev/styles/style.scss")
        .pipe(sourcemaps.init().on('error', function () { console.log('error source init')}))
        .pipe(sass(/*{outputStyle: 'compressed'}*/).on('error', sass.logError))
        .pipe(sourcemaps.write().on('error', function () { console.log('error source write')}))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
    gulp.watch('dev/styles/style.scss', gulp.parallel('styles'));
});

gulp.task('serve', function () {
    browserSync.init({
        proxy: "http://curtain.loc"
    });
    gulp.watch(["*.html", 'css/*.*', 'js/*.*']).on('change', browserSync.reload);
});

gulp.task('start', gulp.series('styles', gulp.parallel('watch', 'serve')));