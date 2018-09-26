var gulp         = require('gulp');
var concatCss    = require('gulp-concat-css');
var cleanCSS     = require('gulp-clean-css');
var rename       = require("gulp-rename");
var notify       = require("gulp-notify")
var sourcemaps   = require('gulp-sourcemaps');
var gulpif       = require('gulp-if');
var argv         = require('yargs').argv; //gulp.if не работает
var gutil        = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
  return gulp.src('gllacy/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(concatCss('style.css'))
    .pipe(gutil.env.type === 'prod' ? cleanCSS() : gutil.noop())
    .pipe(rename('style.min.css'))
    .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('gllacy/css/main'))
    .pipe(notify("Done!"));
    
});

gulp.task('watch', function(){
	gulp.watch('gllacy/css/*.css', ['default'])
});