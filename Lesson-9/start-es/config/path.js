const pathSrc = './src';
const pathDest = './public';

const path = {
  root: pathDest,

  html: {
    src: pathSrc + '/html/*.html',
    watch: pathSrc + '/html/**/*.html',
    dest: pathDest
  },

  pug: {
    src: pathSrc + '/pug/*.pug',
    watch: pathSrc + '/pug/**/*.pug',
    dest: pathDest
  },

  css: {
    src: pathSrc + '/css/*.css',
    watch: pathSrc + '/css/**/*.css',
    dest: pathDest + '/css'
  },

  scss: {
    src: pathSrc + '/sass/*.{sass,scss}',
    watch: pathSrc + '/sass/**/*.{sass,scss}',
    dest: pathDest + '/css'
  },

  js: {
    src: pathSrc + '/js/*.js',
    watch: pathSrc + '/js/**/*.js',
    dest: pathDest + '/js'
  },

  img: {
    src: pathSrc + '/img/*.{png,jpg,jpeg,gif,svg}',
    watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,svg}',
    dest: pathDest + '/img'
  },
  
  svg: {
    src: pathSrc + '/img/svg/*.svg',
    watch: pathSrc + '/img/svg/**/*.svg',
    dest: pathDest + '/img/svg'
  },

  font: {
    src: pathSrc + '/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
    watch: pathSrc + '/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
    dest: pathDest + '/font'
  }
};

export {path};

