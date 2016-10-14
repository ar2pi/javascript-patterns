/*
 * Easely avoid setting multiple global variables by storing them in one single custom namespace function returning all that is needed
 */
var myNameSpace = function() {
    // custom variables environment
    var current = null,
        foo = 'bar';
    function init() {
        return this.current = 1;
    }
    function increment() {
        this.current++;
    }
    function getValue() {
        return this.current;
    }
    // return a pointers object to make those variables available outside the scope
    return {
        current: current,
        foo: foo,
        init: init,
        change: increment,  // public alias for actual method
        getValue: getValue
    };
}(); // self-execute
console.log(myNameSpace);   // prints the global object
myNameSpace.init();
myNameSpace.change();       // invokes the increment() method
myNameSpace.getValue();     // prints 2

/*
 * An encapsulated self-executing function, when you need things to be tidy (but don't actually need to see what's underneath)
 */
(function() { // wrap the function in between parenthesis to keep it from being globally exposed
    
    var ba = 'ba';
    console.log('Independance is key');
    
})(); // self-execute
console.log(ba); // throws an undefined exception

/*
 * An encapsulated object, that may be called anytime needed
 */
(function (public) {

    // private variables
    var foo = {"bar": "baz"};

    // public method that initiates private methods callbacks
    public.someFunction = function (param) {
        privateFunction(param, foo);
    };

    function privateFunction(param, foo) {
        console.log(param);
        console.log(foo.bar === 'baz');
    }

})(window.some_namespace = window.some_namespace || {});
window.some_namespace.someFunction('here be your output:');
