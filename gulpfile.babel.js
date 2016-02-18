'use strict';

import gulp     from 'gulp';
import webpack  from 'webpack';
import path     from 'path';
import sync     from 'run-sequence';
import rename   from 'gulp-rename';
import template from 'gulp-template';
import fs       from 'fs';
import yargs    from 'yargs';
import lodash   from 'lodash';
import gutil    from 'gulp-util';
import serve    from 'browser-sync';
import ngConstant   from 'gulp-ng-constant';
import restEmulator from 'gulp-rest-emulator';
import webpackDevMiddelware from 'webpack-dev-middleware';
import webpachHotMiddelware from 'webpack-hot-middleware';
import colorsSupported      from 'supports-color';

let root = 'client';

// helper method for resolving paths
let resolveToApp = (glob = '') => {
  return path.join(root, 'app', glob); // app/{glob}
};

let resolveToComponents = (glob = '') => {
  return path.join(root, 'app/components', glob); // app/components/{glob}
};

let resolveToServices = (glob = '') => {
  return path.join(root, 'app/services', glob); // app/components/{glob}
};


// map of all paths
let paths = {
  js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
  styl: resolveToApp('**/*.styl'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: path.join(__dirname, root, 'app/app.js'),
  output: root,
  basePath: {
    common: resolveToApp('common'),
    component: resolveToComponents(), 
    page: resolveToComponents(),
    service: resolveToServices(),
    modal: resolveToComponents('modals')
  },
  blankTemplates: {
    common: path.join(__dirname, 'generator', 'component/**/*.**'),
    component: path.join(__dirname, 'generator', 'component/**/*.**'),
    page: path.join(__dirname, 'generator', 'page/**/*.**'),
    service: path.join(__dirname, 'generator', 'service/**/*.**'),
    modal: path.join(__dirname, 'generator', 'modal/**/*.**')
  }
};

// use webpack.config.js to build modules
gulp.task('webpack', (cb) => {
  const config = require('./webpack.dist.config');
  config.entry.app = paths.entry;

  webpack(config, (err, stats) => {
    if(err)  {
      throw new gutil.PluginError("webpack", err);
    }

    gutil.log("[webpack]", stats.toString({
      colors: colorsSupported,
      chunks: false,
      errorDetails: true
    }));

    cb();
  });
});

gulp.task('serve', () => {
  const config = require('./webpack.dev.config');
  config.entry.app = [
    // this modules required to make HRM working
    // it responsible for all this webpack magic
    'webpack-hot-middleware/client?reload=true',
    // application entry point
    paths.entry
  ];

  var compiler = webpack(config);

  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: {baseDir: root},
    middleware: [
      webpackDevMiddelware(compiler, {
        stats: {
          colors: colorsSupported,
          chunks: false,
          modules: false
        },
        publicPath: config.output.publicPath
      }),
      webpachHotMiddelware(compiler)
    ]
  });
});

gulp.task('constants', () => {
  let env = yargs.argv.env || 'development';
  let envConfig = require('./config/' + env + '.json');

  return ngConstant({
      name: 'app.constants',
      constants: envConfig,
      wrap: 'commonjs',
      stream: true
    })
    .pipe(rename("app.constants.js"))
    .pipe(gulp.dest(resolveToApp()));
});

gulp.task('api', () => {
    // Options not require
    let options = {
        port: 8889,
        // root: ['./'],
        // rewriteNotFound: false,
        // rewriteTemplate: 'index.html',
        corsEnable: true//, // Set true to enable CORS
        //corsOptions: {}, // CORS options, default all origins
        //headers: {} // Set headers for all response, default blank
    };
    return gulp.src('./mocks/**/*.js')
        .pipe(restEmulator(options));
});

gulp.task('watch', ['serve']);

gulp.task('component', () => {
  const cap = (val) => {
    return val.charAt(0).toUpperCase() + val.slice(1);
  };
  const dash = (val) => {
    return val.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();  
  }; 
  const name = yargs.argv.name;
  const type =  yargs.argv.type || 'component'; // page, component, service
  const basePath = paths.basePath[type];
  const parentPath = yargs.argv.parent || '';  
  const destPath = path.join(basePath, parentPath, name);

  return gulp.src(paths.blankTemplates[type])
    .pipe(template({
      name: name,
      upCaseName: cap(name),
      dashName: dash(name)
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPath));
});

gulp.task('default', ['constants', 'serve']);
gulp.task('mock', ['constants', 'api', 'serve']);
