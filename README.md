# grunt-cssc

> css-condense grunt plugin

grunt-cssc is a [grunt](https://github.com/gruntjs/grunt) plugin which allows the use of [css-condense](https://github.com/rstacruz/css-condense) module within grunt.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

Install grunt-cssc module via npm in your project directory
```shell
npm install grunt-cssc --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cssc');
```

## The "cssc" task

It is a multi task which means you can process to further executions in the same grunt declaration.

### Overview
In your project's Gruntfile, add a section named `cssc` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cssc: {
    csscFirstSet: {
      files: {
        'examples/main.css': 'examples/css/main.css'
      }
    },
    csscSecondSet: {
      files: {
        'examples/test.css': 'examples/css/test.css'
      }
    }
  },
})
```

### Options

For each set of instruction, you can specify an Option object wich will define the type of compression you need for your specific set.
If no options object is defined in your set of instruction, the default compression options will occur.

Each option is based upon [css-condense](https://github.com/rstacruz/css-condense#command-line-usage), here is the list :

* sortSelectors (Boolean, Default true) : if true, sort css files by selectors
* lineBreaks (Boolean, Default true) : if true, trim line breaks
* sortDeclarations (Boolean, Default true) : if true, sort css selectors by declarations
* consolidateViaDeclarations (Boolean, Default false) : if true, merge by declarations
* consolidateViaSelectors (Boolean, Default true) : if true, merge by selectors
* consolidateMediaQueries (Boolean, Default true) : if true, merge by mediaqueries
* compress (Boolean, Default true) : if true, compress the file
* sort (Boolean, Default false) : if false, turn off sorting
* safe (Boolean, Default false) : if true, avoid the use of consolidate


#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  cssc: {
    csscFirstSet: {
      options:{
        sortSelectors: true,
        lineBreaks: true,
        sortDeclarations:true,
        consolidateViaDeclarations:false,
        consolidateViaSelectors:false,
        consolidateMediaQueries:false,
      },
      files: {
        'examples/main.css': 'examples/css/main.css'
      }
    },
    csscSecondSet: {
      ...
    }
  },
})
```

####

## Release History
* 2013/04/30 - v0.2.6 - grunt 0.4.1 grunt-cssc plugin version.
* 2012/12/11 - v0.1.0 - Initial release.

## License
Copyright (c) 2012 [Étienne Samson](https://github.com/etiennesamson) for "[Mediapart](https://github.com/mediapart)".
Licensed under the [Open Source Initiative MIT license](http://opensource.org/licenses/MIT).
