!function(context, factory) {
  if (typeof module === 'object' && module.exports) {
    factory(exports, require('modules/dep1'), require('modules/dep2'));
  } else if (typeof define === 'function' && define.amd) {
    define(['exports', 'modules/dep1', 'modules/dep2'], factory);
  } else {
    factory((context.myModule = {}), context.dep1, context.dep2);
  }
}(this, function(myModule, dep1, dep2) {
  'use strict';

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
    constructor: Module,
    is: function() {
      return this.kindof + ' ;)';
    }
  };
  // or
  myModule.prototype.is = function() {
    return this.kindof + ' ;)';
  };

  // or

  myModule = new Module(); // instanciated object

  function someHelper() {
    return 'kittens!';
  }

  // do more stuff, let teh crazyness flow through you

  return myModule;
});
