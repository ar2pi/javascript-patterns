// https://en.wikipedia.org/wiki/Immediately-invoked_function_expression
(function(){
    console.log('IIFE ftw');
})();
var iife = function(){
    console.log('expression is expected here, so wrapping in () is not required');
    return 1;
}();
console.log(iife);
