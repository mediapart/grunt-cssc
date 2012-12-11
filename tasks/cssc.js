/*
 * grunt-css-condense
 * https://github.com/etiennesamson/grunt-css-condense
 *
 * Copyright (c) 2012 Étienne Samson
 * Licensed under the MIT license.
 */


module.exports = function(grunt) {
  "use strict";

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/gruntjs/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerMultiTask('cssc', 'Your task description goes here.', function() {
    /**
     * Variables
     */
    var cssCondense, csscOpts, files, src;

    // css-condense variable requirement
    cssCondense = require("css-condense");

    // options in cssc options object
    csscOpts = grunt.config.process("csscOptions") || {};

    // get files list
    files = grunt.file.expandFiles(this.file.src);

    // concat files source
    src = grunt.helper('concat', files);

    // css-condense execution on src
    src = cssCondense.compress(src, csscOpts);

    /*
     cssc_options:{
      sortSelectors: true,
      lineBreaks: true,
      sortDeclarations:true,
      consolidateViaDeclarations:false,
      consolidateViaSelectors:true,
      consolidateMediaQueries:true,
      compress:true,
      sort:false,
      safe:false
    },
     */

    // write in file
    grunt.file.write(this.file.dest, src);

    // Fail task if errors were logged.
    if (!!this.errorCount) { return false; }

    // Otherwise, print a success message.
    grunt.log.writeln('File "' + this.file.dest + '" created.');
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('cssc', function() {
    return 'cssc !!!';
  });

};
