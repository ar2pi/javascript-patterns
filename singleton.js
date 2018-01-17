/*
 * Make sure to execute a function only once
 */
var Singleton = function() {
  if(Singleton.prototype._singletonInstance) {
    return Singleton.prototype._singletonInstance;
  }
  Singleton.prototype._singletonInstance = true;

  // do whatever

  console.log('Singleton executed');
};

Singleton();
Singleton(); // prints 'Singleton executed' only once

/*
 * Make sure to instanciate an object only once
 * for reference see: https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript
 */
var TrueSingleton = !function() {

  // Instance stores a reference to the Singleton
  var instance;

  function init() {

    console.log('instanciated teh singleton');
    // do stuff

    return {
      aProperty: 'some prop',
      aMethod: function() {
        console.log('yeee');
      }
    };

  };

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };

}();
TrueSingleton.getInstance();
TrueSingleton.getInstance(); // prints 'instanciated teh singleton' only once
console.log(TrueSingleton.getInstance() === TrueSingleton.getInstance()); // prints true
