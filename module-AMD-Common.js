!function(context, factory) {
  if (typeof module === 'object' && module.exports) {
    factory(exports, require('dep1'), require('dep2')); 
  } else if (typeof define === 'function' && define.amd) {
    define(['exports', 'dep1', 'dep2'], factory);
  } else {
    factory((context.myModule = {}), context.dep1, context.dep2);
  }
}(this, function(myModule, dep1, dep2) {
  'use strict';
  
  myModule = {some: 'awesome', stuff: 'or', whatever: function() { return ';)'; }};
  
  // or
  
  myModule = function() {
    this.is = 'an';
    this.awesome = function() {
      return 'instanciable object';
    }
  };
  myModule.prototype = {
    constructor: myModule,
    method: function() {
      return ';)';
    }
  };
  
  function someHelper() {
    return 'send in the cavalry!';
  }
  
  // do more stuff, let teh crazyness flow through you
  
  return myModule;
});
