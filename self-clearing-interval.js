/*
 * A self-clearing interval to avoid infinite repetition
 */
var count = 0,
    limit = 6,
    time = 600000, // in milliseconds
    myInterval = setInterval(function () {
        count++;
	// do whatever
        if(count === limit) clearInterval(myInterval);
    }, time);
