const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')


// compilação do SASS;
function compilarSass(){
    return gulp.src('./source/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'))
}

// compressão de código JavaScript e obfuscação
function comprimeJs() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'))
}

// compressão de imagens disponibilizadas no Material de apoio;
function comprimeImagens(){
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'))
}
// exportar
exports.sass = compilarSass;
exports.javascript = comprimeJs;
exports.images = comprimeImagens;