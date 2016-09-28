/*
 * Lazy rendering pattern, useful for displaying particularly heavy html blocks at once
 * and repainting process is a performance issue
 */
var _lazyRender = function(elements, interval) {
    var counter = 0,
        limit,
        lazyRender = setInterval(function() {
            limit = counter + 5;
            for (counter; counter < limit; counter++) {
                // if(counter === 0) {
                //     var time1 = new Date().getTime();
                //     console.log('START RENDERING: ' + time1);
                // }

                if (counter === elements.length) {
                    // var time2 = new Date().getTime();
                    // console.log('END RENDERING: ' + time2);
                    // console.log('Total ellapsed: ' + (time2 - time1));

                    clearInterval(lazyRender);
                    break;
                } else {
                    jQuery(elements[counter]).show();
                }
            }
        }, interval || 80);
};
