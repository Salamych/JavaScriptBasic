const {src, dest, watch, series, parallel} = require('gulp');
const browserSync = require('browser-sync').create();

const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');


const html = (cb) => {
  return src('./src/html/*.html')
    .pipe(plumber({
      errorHandler: notify.onError(error =>({
        title: "HTML",
        message: error.message
      }))
    }))
    .pipe(fileInclude())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(dest('./public'))
    .pipe(browserSync.stream());
}

const watcher = () => {
  watch('./src/html/**/*.html', html)
}

const server = () => {
  browserSync.init({
    server: {
        baseDir: "./public"
    }
});
}

exports.html = html;
exports.watch = watcher;

exports.dev = series(
  html,
  parallel(watcher, server)
);