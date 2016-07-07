/*** 
 * A singleton pattern is typically used to instanciate a given object only once
 * and eventually avoid setting global variables as checkers for that instanciation
 */
var Singleton = function() {
    if(Singleton.prototype._singletonInstance) {
        return Singleton.prototype._singletonInstance;
    }// test
    Singleton.prototype._singletonInstance = true; // or 'this', see below
    
    // do whatever
    
    console.log('Singleton executed');
};

// --- Case 'true' ---
// Note: in case you dont actually need to set the object but rather run the code inside it only once:
//       -> set 'true' as _singletonInstance
//       -> the non-use of the 'new' keyword is because we are just accessing the function's prototype property
Singleton();
Singleton(); // prints 'Singleton executed' only once

// --- Case 'this' ---
// Note: setting 'this' as _singletonInstance will store many times same instance of same object (Droste effect style)
//       -> if you just need a globally accessible object refer to https://github.com/decksterr/javascript-patterns/blob/master/avoid-globals.js
//       -> use the 'new' keyword upon declaration if using 'this'
var a = new Singleton(),
    b = new Singleton();
console.log(a === b); // prints 'true'