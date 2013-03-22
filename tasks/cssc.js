/*
 * grunt-css-condense
 * https://github.com/etiennesamson/grunt-css-condense
 *
 * Copyright (c) 2012 Étienne Samson
 * Licensed under the MIT license.
 */


// The actual css condense library
var cssCondense = require('css-condense');

module.exports = function(grunt) {
  "use strict";

  // ==========================================================================
  // TASKS
  // ==========================================================================

  // Task description
  var description = "Condense your CSS.";

  grunt.registerMultiTask('cssc', description, function() {

    // Get some defaults for our options.  By default we should let cssc
    // take care of these defaults
    var options = this.options();

    // Write out the options if grunt is run in verbose mode
    grunt.verbose.writeflags(options, 'Options');

    // Start iterating over all the output targets
    this.files.forEach(function(file){

      // Get the input file set for this target
      var input = file.src.filter(function(filepath) {

        // Sanity check: Filter out files that don't exist
        if(!grunt.file.exists(filepath)) {
          // File doesn't exist, don't add it to the list of valid input files
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }

      }).map(function(filepath){
        // Turn each file entry into its file contents
        return grunt.file.read(filepath);

      // Concatinate all the input files
      }).join(grunt.util.linefeed);

      // Compress the css
      var output = condense.compress(iput, options);

      // Sanity check: make sure that we got some output
      if(output.length < 1) {
        grunt.log.warn(
          'Destination not written because compiled files were empty.'
        );
      } else {
        // Write the output file
        grunt.file.write(file.dest, output);
      }

    });
  });
};
