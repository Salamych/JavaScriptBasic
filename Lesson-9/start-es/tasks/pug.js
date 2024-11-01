import gulp from 'gulp';
import {path} from '../config/path.js'

import plumber from 'gulp-plumber';
import pugs from 'gulp-pug';
import webpHtml from 'gulp-webp-html';

const pug = () => {
  return gulp.src(path.pug.src)
    .pipe(plumber())
    .pipe(pugs())
    .pipe(webpHtml())
    .pipe(gulp.dest(path.pug.dest))
}

export {pug}