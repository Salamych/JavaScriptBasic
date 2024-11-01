import gulp from 'gulp';
import {path} from '../config/path.js';
import {app} from '../config/app.js';

import plumber from 'gulp-plumber';
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import webp from 'gulp-webp';
import gulpif from 'gulp-if';



const img = () => {
  return gulp.src(path.img.src, {encoding: false})
    .pipe(plumber())
    .pipe(newer(path.img.dest))
    .pipe(webp())
    .pipe(gulp.dest(path.img.dest))
    .pipe(gulp.src(path.img.src, {encoding: false}))
    .pipe(newer(path.img.dest))
    .pipe(gulpif(app.isProd, imagemin(app.imagemin)))
    .pipe(gulp.dest(path.img.dest))
}

export {img}