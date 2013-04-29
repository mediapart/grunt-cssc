/*
 * grunt-cssc
 * https://github.com/mediapart/grunt-cssc
 *
 * Copyright (c) 2013 Étienne Samson
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['examples/main.css', 'examples/ie.css', 'examples/print.css']
    },

    // Configuration to be run (and then tested).
    cssc: {
      default: {
        /*
         * no option object passed, default options object is taken :
         * {
         *   sortSelectors: true,
         *   lineBreaks: false,
         *   sortDeclarations:true,
         *   consolidateViaDeclarations:false,
         *   consolidateViaSelectors:true,
         *   consolidateMediaQueries:true,
         *   compress:true,
         *   sort:false,
         *   safe:false
         * }
         */
        files: {
          'examples/main.css': 'examples/css/!(_)*.css'
        }
      },
      notConsolidate: {
        /*
         * Option object is specified, overwrites all passed attributes
         */
        options: {
          lineBreaks: true,
          consolidateViaDeclarations: false,
          consolidateViaSelectors: false,
          consolidateMediaQueries: false
        },
        files: {
          'examples/ie.css': ['examples/css/_ie.css'],
          'examples/print.css': ['examples/css/_print.css']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    },

    // watch
    watch: {
      "cssc": {
        files: ['examples/css/*.css'],
        tasks: 'cssc',
        options: {
          interrupt: true
        }
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'cssc', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
