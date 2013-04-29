/*
 * grunt-cssc
 * https://github.com/mediapart/grunt-cssc
 *
 * Copyright (c) 2013 Étienne Samson
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('cssc', 'Your task description goes here.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      sortSelectors: true,
      lineBreaks: true,
      sortDeclarations:true,
      consolidateViaDeclarations:false,
      consolidateViaSelectors:true,
      consolidateMediaQueries:true,
      compress:true,
      sort:false,
      safe:false
    }), cssCondense = require("css-condense");

    // Iterate over all specified file groups.

    //grunt.log.writeln(this.files);

    this.files.forEach(function(f){

      var src = f.src.filter(function(filepath) {

        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }

      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join("");

      // css-condense operation
      src = cssCondense.compress(src, options);

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');

    });
  });

};