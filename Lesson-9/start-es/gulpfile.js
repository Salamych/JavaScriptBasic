import gulp from 'gulp';
import {path} from './config/path.js';
import {app} from './config/app.js';
import browserSync from 'browser-sync';


import {clear} from './tasks/clear.js';
import {html} from './tasks/html.js';
import {scss} from './tasks/scss.js';
import {js} from './tasks/js.js';
import {img} from './tasks/img.js';
import {font} from './tasks/font.js';


const watcher = () => {
  gulp.watch(path.html.watch, html).on("all", browserSync.reload);
  gulp.watch(path.scss.watch, scss).on("all", browserSync.reload);
  gulp.watch(path.js.watch, js).on("all", browserSync.reload);
  gulp.watch(path.img.watch, img).on("all", browserSync.reload);
  gulp.watch(path.font.watch, font).on("all", browserSync.reload);
}

const server = () => {
  browserSync.init({
    server: {
        baseDir: path.root
    }
});
}

const build = gulp.series(
  clear,
  gulp.parallel(html, scss, js, img, font)
);

const dev = gulp.series(
  build, 
  gulp.parallel(watcher, server)
);

const def = app.isProd ? build : dev;

export {dev};
export {build};
export {scss};
export {js};
export {img};
export {html};
export {font};

export default def;
