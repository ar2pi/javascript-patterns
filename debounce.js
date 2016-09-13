/*
 * Debounce function, to fire particularly taxing stuff not more than once every x amount of time, 
 * won't trigger if it gets invoked in between time out but resets counter instead 
 * 'immediate' can be set to return function as soon as it's been called rather than at the end of timer
 */
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var obj = this, args = arguments;
        if (timeout) clearTimeout(timeout);
        else if (immediate) func.apply(obj, args);
        timeout = setTimeout(function() {
            if (!immediate) func.apply(obj, args);
            timeout = null; 
        }, wait || 100); 
    };
}

// Example of use:
jQuery(document).ready(function() {
    jQuery(window).on('scroll', debounce(function(e) {
            console.log('debounced');
            console.log(e); // will print the corresponding jQuery object
            // some heavy work
        }, 250, true)
    );
});

// NB: credits to John Hann http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
