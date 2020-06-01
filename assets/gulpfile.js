'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function (done) {
    gulp.src('./css/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
    done();
});

gulp.task("watch", function() {
    gulp.watch('./css/main.scss', gulp.parallel('sass'));
    gulp.watch('./scss/**/*.scss', gulp.parallel('sass'));
});