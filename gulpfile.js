var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlclean = require('gulp-htmlclean');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var paths = {
    src: 'src',
    srcSCSS: 'src/scss/',
    srcCSS: 'src/css/',
    srcJS: 'src/js/',

    tmp: 'tmp',
    tmpCSS: 'tmp/css/',
    tmpJS: 'tmp/js/js/',
};


gulp.task('sass', function() {
    return gulp.src([paths.srcSCSS + 'site.scss']).pipe(sass()).pipe(cleanCSS()).pipe(gulp.dest(paths.tmpCSS)).pipe(gulp.dest(paths.srcCSS));
});

gulp.task('scripts', function() {
    return gulp.src(paths.srcJS + '*.js').pipe(uglify()).pipe(gulp.dest(paths.tmpJS));
});

gulp.task('htmlClean', function () {
    return gulp.src(paths.srcPHP + '*.ejs').pipe(htmlclean()).pipe(gulp.dest(paths.tmpPHP));
});

gulp.task('watch', function() {
    gulp.watch(['./src/scss/*.scss', './src/scss/components/*.scss'], gulp.task('sass'));
    gulp.watch('./src/js/*.js', gulp.task('scripts'));
});