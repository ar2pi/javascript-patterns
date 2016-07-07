/***
 * Easely avoid setting multiple global variables by storing them in one single custom namespace function returning all that is needed
 */
var myNameSpace = function() {
    // custom variables environment 
    var current = null,
        foo = 'bar';
    function init() {
        return this.current = 1;
    }
    function change() {
        return this.current++; // note: don't increment while returning if you actually need to return the value
    }
    // return a pointers object to make those variables available outside the scope
    return {
        current: current,
        foo: foo,
        init: init,
        set: change // public alias for actual method
    };
}(); // self-execute
console.log(myNameSpace); // prints the returned object
myNameSpace.set(); // invokes the change() method

/***
 * An encapsulated self-executing function, when you need things to be tidy (but don't actually need to see what's underneath)
 */
(function(){ // wrap the function in between parenthesis to keep it from being globally exposed
    var ba = 'ba';
    console.log('Independance is key');
})(); // the last () is for self-execution
console.log(ba); // throws an undefined exception