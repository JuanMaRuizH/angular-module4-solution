'use strict';
module.exports = function(grunt) {
  require('jit-grunt')(grunt);
  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
          reporter: require('jshint-stylish'),
          jshintrc: true
      },
      all: ['Gruntfile.js', 'js/**/*.js', '!node_modules/*/*.js']
    },
    browserSync: {
        bsFiles: {
            src : ['./{,*/}*.html', 'js/{,*/}*.js']
        },
        options: {
            server: {
                baseDir: './'
            }
        }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'browserSync']);

};