var grunt = require('grunt');
var fs = require('fs');

function readFile(file) {
  'use strict';

  var contents = grunt.file.read(file);

  if (process.platform === 'win32') {
    contents = contents.replace(/\r\n/g, '\n');
  }

  return contents;
}

exports.coffee = {
  compile: function(test) {
    'use strict';

    test.expect(2);

    var actual = readFile('tmp/compressed.css');
    var expected = readFile('test/expected/compressed.css');
    test.equal(expected, actual, 'should compress a single css file');

    actual = readFile('tmp/concat.css');
    expected = readFile('test/expected/concat.css');

    test.equal(expected, actual, 'should compress multiple css files to a single css file');

    test.done();
  }
};
