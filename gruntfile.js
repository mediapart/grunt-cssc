module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        "curly": true,
        "eqeqeq": true,
        "immed": true,
        "latedef": true,
        "newcap": true,
        "noarg": true,
        "sub": true,
        "undef": true,
        "boss": true,
        "eqnull": true,
        "node": true,
        "es5": true
      }

    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    cssc: {
      options: {
        foo: "bar"
      },
      compress: {
        files: {
          'tmp/compressed.css': ['test/fixtures/test1.css'],
          'tmp/concat.css': [
            'test/fixtures/test1.css',
            'test/fixtures/test2.css'
          ]
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', [
    'clean',
    'cssc',
    'nodeunit'
  ]);

  // By default, lint and run all tests.
  grunt.registerTask('default', [
    'jshint',
    'test'
  ]);

};
