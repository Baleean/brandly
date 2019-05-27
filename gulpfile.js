"use strict";

const gulp          = require("gulp");
const sass          = require('gulp-sass');
const del           = require('del');
const concat        = require('gulp-concat');
const postcss       = require('gulp-postcss');
const autoprefixer  = require('autoprefixer');

gulp.task('sass', function () {
    return gulp.src('./sources/scss/*.scss')
        .pipe(postcss([ autoprefixer() ]))
        .pipe(concat('main.scss'))
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('clean', function () {
    return del('./dist/css/main.css');
});

gulp.task('img' , function() {
   return gulp.src('./sources/img/**')
       .pipe(gulp.dest('./dist/img'));
});

gulp.task('watch', function() {
    gulp.watch('./sources/scss/*.scss', gulp.series('sass'));
});


