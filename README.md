# grunt-cssc

grunt-cssc is a [grunt](https://github.com/gruntjs/grunt) plugin which allows the use of the excelent [css-condense](https://github.com/rstacruz/css-condense) module within grunt.
grunt-cssc is a [grunt multitask](http://gruntjs.com/configuring-tasks) and an be configured as such.


## Steps of use

1. Install grunt-cssc module via npm in your project directory `npm install grunt-cssc`.
2. Add `grunt.loadNpmTasks('grunt-cssc');` to your gruntfile.
3. Setup grunt-cssc task configuration

```javascript

// long way
"cssc": {
  dist: {
    files: {
      "examples/main.css": ["examples/css/**/*.css"]
    }
  }
}
// or short way
"cssc": {
  "examples/main.css": "examples/css/**/*.css"
}
```
See the [grunt documentation](http://gruntjs.com/configuring-tasks) for other ways to configure the cssc task options.

4. Setup grunt-cssc options

```javascript
csscOptions:{
  sortSelectors: true,
  lineBreaks: true,
  sortDeclarations:true,
  consolidateViaDeclarations:false,
  consolidateViaSelectors:false,
  consolidateMediaQueries:false,
},

```
It is based upon [css-condense](https://github.com/rstacruz/css-condense#command-line-usage) and can be set with the following options:

* sortSelectors (Boolean) : if true, sort css files by selectors
* lineBreaks (Boolean) : if true, trim line breaks
* sortDeclarations (Boolean) : if true, sort css selectors by declarations
* consolidateViaDeclarations (Boolean) : if true, merge by declarations
* consolidateViaSelectors (Boolean) : if true, merge by selectors
* consolidateMediaQueries (Boolean) : if true, merge by mediaqueries
* compress (Boolean) : if true, compress the file
* sort (Boolean) : if false, turn off sorting
* safe (Boolean) : if true, avoid the use of consolidate

5. Setup watch instruction

```javascript
watch: {
  cssc: {
    files: ['**/*.css'],
    tasks: ['cssc']
  }
}
```

## An example Setup

```javascript

module.exports = function(grunt) {
  "use strict";

  grunt.loadNpmTasks("grunt-cssc");

  // Project configuration.
  grunt.initConfig({
    test: {
      files: ['test/**/*.js']
    },
    lint: {
      files: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js']
    },
    cssc: {
      dist:{
        files: {
          "examples/main.css": ["examples/css/**/*.css"]
        },
        options:{
          sortSelectors: true,
          lineBreaks: true,
          sortDeclarations:true,
          consolidateViaDeclarations:false,
          consolidateViaSelectors:true,
          consolidateMediaQueries:true,
          compress:true,
        }
      }
    },
    watch: {
      "cssc": {
        files: ['examples/css/**/*.css'],
        tasks: ['cssc']
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'test lint cssc');

};

```

## Dependencies
* [node.js](http://nodejs.org/) ~0.10.0
* [grunt](https://github.com/gruntjs/grunt) ~0.4.x
* [css-condense](https://github.com/rstacruz/css-condense) ~0.0.6

## Release History

* 2012/12/11 - v0.1.0 - Initial release.

## License
Copyright (c) 2012 [Étienne Samson](https://github.com/etiennesamson) for "[Mediapart](https://github.com/mediapart)".
Licensed under the [Open Source Initiative MIT license](http://opensource.org/licenses/MIT).
