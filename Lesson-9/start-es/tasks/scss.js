import gulp from 'gulp';
import {path} from '../config/path.js'
import {app} from '../config/app.js';

import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import size from 'gulp-size';
import shorthand from 'gulp-shorthand';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import sassGlob from 'gulp-sass-glob';
import webpCss from 'gulp-webp-css';


const scss = () => {
  return gulp.src(path.scss.src, {sourcemaps: app.isDev})
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({title: "CSS до сжатия"}))
    .pipe(gulp.dest(path.scss.dest, {sourcemaps: app.isDev}))
    .pipe(rename({suffix: '.min'}))
    .pipe(csso())
    .pipe(size({title: "CSS после сжатия"}))
    .pipe(gulp.dest(path.scss.dest, {sourcemaps: app.isDev}))
}

export {scss}