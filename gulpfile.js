// Include gulp

var gulp = require('gulp');



// Include Our Plugins

var jshint = require('gulp-jshint');

var sass = require('gulp-sass');

var concat = require('gulp-concat');

var uglify = require('gulp-uglify');

var rename = require('gulp-rename');

var htmlclean = require('gulp-htmlclean');

var cleanCSS = require('gulp-clean-css');

var inject = require('gulp-inject');

var watch = require('gulp-watch');


/*PASTAS DE PROCESSAMENTO*/

var paths = {

src: 'src',

srcINC:'src/includes/',

srcPHP: 'src/',

srcCSS:'src/css',

srcSCSS: 'src/scss/',

srcJS: 'src/js/',



tmp: 'tmp',

tmpINC:'tmp/includes/',

tmpPHP: 'tmp/',

tmpCSS: 'tmp/css/',

tmpJS: 'tmp/js/',

tmpASS:'tmp/assets/'

};



// Lint Task(parte do codigo onde ele verifica os erros 

gulp.task('lint', function() {

return gulp.src(paths.srcJS + '*.js')

.pipe(jshint())

.pipe(jshint.reporter('default'));

});



// Compile Our Sass (desinstalar concat)

gulp.task('sass', function() {

return gulp.src(paths.srcSCSS + 'stylesheet.scss')

.pipe(sass())

.pipe(cleanCSS())

.pipe(gulp.dest(paths.srcCSS))

.pipe(gulp.dest(paths.tmpCSS));

});



//Clean html

gulp.task('htmlClean', function () {

return gulp.src(paths.srcPHP + '*.php')
       //gulp.src(paths.src)

.pipe(htmlclean())

.pipe(gulp.dest(paths.tmpPHP));

});

// Includes PHP
gulp.task('includes', function(){
    return gulp.src(paths.srcINC + '*.php')

    .pipe(htmlclean())
    .pipe(gulp.dest(paths.tmpINC));
})
// Concatenate & Minify JS

gulp.task('scripts', function() {

return gulp.src(paths.srcJS + '*.js')

.pipe(concat('script.js'))

.pipe(uglify())

.pipe(gulp.dest(paths.tmpJS));

});

gulp.task('assets',function(){

return gulp.src('./src/assets/*/*')

.pipe(gulp.dest(paths.tmpASS));

});

// Watch Files For Changes

/*

A tarefa de relógio é usada para executar tarefas à medida que fazemos alterações nos nossos arquivos.

À medida que você escreve código e modifica seus arquivos, o método gulp.watch () escutará as mudanças e executará automaticamente nossas tarefas novamente,

então não devemos voltar a nossa linha de comando continuamente e executar o comando gulp sempre.

*/



gulp.task('watch', function() {

gulp.watch('./src/scss/*.scss', ['sass']);

});



// Default Task

gulp.task('default', ['watch', 'assets']);
