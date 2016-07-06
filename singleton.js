/*** 
 * A singleton pattern is typically used to instanciate a given object only once
 * and eventually avoid setting global variables as checkers for that instanciation
 */
var Singleton = function() {
    if(Singleton.prototype._singletonInstance) {
        return Singleton.prototype._singletonInstance;
    }
    HotelRefreshInterval.prototype._singletonInstance = this; // or 'true' if you don't actually need to retrieve the object
    
    // do whatever
};

var a = new Singleton(),
    b = Singleton();
console.log(a === b); // prints 'true'