/**
 *
 * Common approach to define modules in es5
 * first option is for strict CommonJS
 * 2. is for Browserify / Node like environments, not strictly CommonJS, hence well suited for web projects / node modules
 * AMD, with requirejs for e.g., should be preferred on the client-side since it loads modules in async fashion
 * CommonJS should be preferred for server-side scripts to easely require npm modules for e.g.
 * but both can be used in any js runtime environment actually
 * for more examples / references / tools, see https://github.com/umdjs/umd
 */
!function(context, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
  // [2.] if (typeof require === 'function' && typeof module === 'object' && module.exports) {
    factory(exports, require('modules/dep1'), require('modules/dep2')); // CommonJS
    // [2.] module.exports = factory(require('modules/dep1'), require('modules/dep2'));
  } else if (typeof define === 'function' && define.amd) {
    define(['exports', 'modules/dep1', 'modules/dep2'], factory); // AMD
    // [2.] define(['modules/dep1', 'modules/dep2'], factory);
  } else {
    factory((context.myModule = {}), context.dep1, context.dep2);
    // [2.] context.myModule = factory(context.dep1, context.dep2);
  }
}(this, function(myModule, dep1, dep2) { // myModule is omissible if 2.
  'use strict';

  // var myModule; if 2.

  // do stuff

  myModule = function(input) {
    return 'simple output';
  };

  // or

  myModule = {
    stuff: 'simple object',
    kindof: 'cool',
    is: function() {
      return this.kindof + ' ;)';
    }
  };

  // or

  myModule = function(arg) {
    this.stuff = 'instanciable object';
    this.arg = arg || 'stuff';
    this.kindof = 'awesome';
    return this;
  };
  myModule.prototype = {
    constructor: myModule,
    is: function() {
      return this.kindof + ' ;)';
    }
  };
  // or
  myModule.prototype.is = function() {
    return this.kindof + ' ;)';
  };

  // or
  
  var Module = function(arg) {
    this.stuff = 'scoped object constructor';
    this.arg = arg || 'stuff';
    this.kindof = 'verbose';
    return this;
  }
  myModule = new Module('noice'); // instanciated object

  function someHelper() {
    return 'kittens!';
  }

  // do more stuff, let teh crazyness flow through you

  return myModule;
});
