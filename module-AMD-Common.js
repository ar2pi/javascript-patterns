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
    this.arg = arg || 'can has all the args u can give, but u no forget new eh :3';
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

  function someHelper() {
    return 'send in the cavalry!';
  }

  // do more stuff, let teh crazyness flow through you

  return myModule;
});
