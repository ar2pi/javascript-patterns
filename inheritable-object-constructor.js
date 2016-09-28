/*
 * An inheritable object constructor pattern, to be used when setting objects that need:
 * - common properties and / or methods (prototype)
 * - set(able) custom properties (constructor)
 * - basically same features as in other class oriented languages
 *
 * The 'prototype' object defines properties and methods inherited by all instances of the object
 * -> to be used in priority for performance reasons (declaration of those properties / methods will only run once for all objects)
 * The constructor is where instanced properties and methods are set upon creation of objects (with the 'new' operator)
 * -> meaning that modifications of those properties / methods will only affect that particular instance of the object
 * Private variables encapsulation can be achieved in the object's constructor
 */

// Object constructor
var Car = function(type, fuel, customStr) {
    // Set instanced object properties
    this.description = '';
    // Set instanced object properties from given parameters
    this.type = type;
    this.fuel = fuel;
    // Set private variables
    var private = 'some local var'; // not accessible outside object's scope
    // Set instanced object methods (to be used when said method uses object parameters or local variables)
    this.isElectric = function() {
        return customStr += (fuel === 'electric') ? fuel : 'not electric';
    };
};
// Set predefined properties for all instanciated objects
Car.prototype.wheels = 4;
// Set predefined methods for all instanciated objects
Car.prototype.setType = function(str) { // simple setter
    return this.type = str;
};
Car.prototype.getType = function() { // simple getter
    return this.type;
};

var myCar = new Car('4x4', 'diesel', 'This car is ');
console.log(myCar); // prints the Car object
console.log(myCar instanceof Car); // true
