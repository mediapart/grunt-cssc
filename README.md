# grunt-cssc [![Build Status](https://travis-ci.org/mediapart/grunt-cssc.png)](https://travis-ci.org/mediapart/grunt-cssc)

grunt-cssc is a [grunt](https://github.com/gruntjs/grunt) plugin which allows the use of [css-condense](https://github.com/rstacruz/css-condense) module within grunt.
grunt-cssc also use native grunt [concat instruction](https://github.com/gruntjs/grunt/blob/master/docs/task_concat.md)


## Steps of use

1. Install grunt-cssc module via npm in your project directory `npm install grunt-cssc`.
2. Add `grunt.loadNpmTasks('grunt-cssc');` to your gruntfile.
3. Setup grunt-cssc task files sources and destination  

```javascript

// long way
"cssc": {
  dist:{
    src: "examples/css/**/*.css",
    dest: "examples/main.css"
  }
}
// or short way
"cssc": {
  dist:{
    "examples/main.css": "examples/css/**/*.css"
  }
}
```
See grunt [concat](https://github.com/gruntjs/grunt/blob/master/docs/task_concat.md) for other files system access.

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
It is based upon [css-condense](https://github.com/rstacruz/css-condense#command-line-usage) and can be set with :

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
  "cssc": {
    files: ['<config:cssc.dist.src>'],
      tasks: 'cssc'
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
        src: "examples/css/**/*.css",
        dest: "examples/main.css"
      }
    },
    csscOptions:{
      sortSelectors: true,
      lineBreaks: true,
      sortDeclarations:true,
      consolidateViaDeclarations:false,
      consolidateViaSelectors:true,
      consolidateMediaQueries:true,
      compress:true,
    },
    watch: {
      "cssc": {
        files: ['<config:cssc.dist.src>'],
          tasks: 'cssc'
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
      },
      globals: {}
    }
  });

  // Default task.
  grunt.registerTask('default', 'test lint cssc');

};

```

## Dependencies
* [node.js](http://nodejs.org/) ~0.8.0
* [grunt](https://github.com/gruntjs/grunt) ~0.3.17
* [css-condense](https://github.com/rstacruz/css-condense) ~0.0.6

## Release History

* 2012/12/11 - v0.1.0 - Initial release.

## License
Copyright (c) 2012 [Étienne Samson](https://github.com/etiennesamson) for "[Mediapart](https://github.com/mediapart)".  
Licensed under the [Open Source Initiative MIT license](http://opensource.org/licenses/MIT).