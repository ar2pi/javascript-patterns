/*
 * Throttle function, in order to run a callback only once every x amount of time
 */
function throttle(callback, limit) {
    var wait = false;
    return function() {
        if (!wait) {
            callback.call();
            wait = true;
            setTimeout(function() {
                wait = false;
            }, limit || 100);
        }
    };
}

function callback() {
    console.log('throttled');
    // stuff to be throttled
}

// Allow callback to run at most 1 time per 250ms
window.addEventListener('scroll', throttle(callback, 250));

// NB: credits to Jonathan Sampson https://jsfiddle.net/jonathansampson/m7G64/
