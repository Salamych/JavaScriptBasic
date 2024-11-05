import gulp from 'gulp';
import {path} from '../config/path.js';
import {app} from '../config/app.js';

import plumber from 'gulp-plumber';
import newer from 'gulp-newer';
import svgSprite from 'gulp-svg-sprite';



const svg = () => {
  return gulp.src(path.svg.src, {encoding: false})
    .pipe(plumber())
    .pipe(newer(path.svg.dest))
    .pipe(svgSprite(app.svgSprite))
    .pipe(gulp.dest(path.svg.dest))
}

export {svg}