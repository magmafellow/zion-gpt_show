const { src, dest, watch } = require('gulp')
const postcss = require('gulp-postcss')
const dartSass = require('sass')
const rename = require('gulp-rename')
const sass = require('gulp-sass')(dartSass)
const pug = require('gulp-pug')
const sourcemaps = require('gulp-sourcemaps')

// plugins
const autoprefixer = require('autoprefixer')
const cleanCSS = require('gulp-clean-css')

function css(cb) {
  return src('src/**/*.css')
    .pipe(postcss([autoprefixer(), cssnano({ preset: 'default' })]))
    .pipe(dest('dist/'))
}

function scss(cb) {
  return src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('dist/css'))
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/css'))
}

function js(cb) {
  return src('src/scripts/**/*.js').pipe(dest('dist/scripts'))
}

function views(cb) {
  return src('./src/**/*.pug').pipe(pug({})).pipe(dest('./dist/'))
}

exports.watchcss = function () {
  watch('src/**/*', css)
}

exports.watch_scss = function () {
  watch('src/**/*.scss', scss)
}

exports.default = function () {
  watch('src/scss/**/*.scss', scss)
  watch('src/scripts/**/*.js', js)
  watch('src/**/*.{pug,html}', views)
}
