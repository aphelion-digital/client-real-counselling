/* jshint node:true */
'use strict';

var path = require('path');

module.exports = function(config) {
  config.gulp = {
    dist: path.join(config.paths.public, 'dist'),
    lint: {
      js: [
        path.join(config.paths.app, '**/*.js'),
      ],
    },
    views: {
      jade: config.paths.modules.dirs.map(function(mod) {
        return path.join(mod, '**/*.jade');
      }),
    },
    scripts: { // client scripts
      js: config.paths.modules.scripts.map(function(scripts) {
        return path.join(scripts, '**/*.js');
      }),

      file: 'scripts.js',
      min: 'scripts.min.js',
    },
    styles: {

      sass: config.paths.modules.styles.map(function(styles) {
        return path.join(styles, '**/*.{sass,scss}');
      }),

      file: 'styles.css',
      min: 'styles.min.css',
    },
  };

  config.gulp.nodemon = {
    ext: 'js',
    ignore: [
      config.gulp.dist,
      config.paths.nodeModules,
      config.paths.bowerComponents,
    ].concat(config.paths.modules.scripts),
  };
};
