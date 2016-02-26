var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');

gulp.task('css', function () {
    return gulp.src('Styles/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concatCss('Styles/public.css'))
        .pipe(gulp.dest('public/'))
});