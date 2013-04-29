'use strict';

var grunt = require('grunt'),
    cssCondense = require('css-condense');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.cssc = {
  setUp: function(done) {
    // setup here if necessary
    this.options = {
      sortSelectors: true,
      lineBreaks: true,
      sortDeclarations:true,
      consolidateViaDeclarations:false,
      consolidateViaSelectors:true,
      consolidateMediaQueries:true,
      compress:true,
      sort:false,
      safe:false
    };
    done();
  },
  default: function(test) {
    test.expect(3);
    var files = grunt.file.expand("test/base_css/!(_)*.css"),
      concat = grunt.file.read('test/fixtures/main.css'),
      expected = grunt.file.read('test/expected/main.css'),
      src;

    // files are there ? must be > 0
    test.ok(files.length, "The files must be there to run a proper test");

    src = files.map(function(filepath) {
      // Read file source.
      return grunt.file.read(filepath);
    }).join("");

    // concat test
    test.equal(concat, src, 'The files should be properly concatenated');

    // css-condense operation
    src = cssCondense.compress(src, this.options);

    // cssc test
    test.equal(expected, src, 'File main.css must be properly compiled');

    test.done();
  }
};
