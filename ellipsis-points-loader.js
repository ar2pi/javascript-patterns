/*
 * Simple ellipsis points loader
 * usage:
 *  var Loader = new PointsLoader(jQuery(target), 200)
 *  Loader.stopLoader();
 */
 var PointsLoader = function(e, speed) {
    var n = 1,
        interval = setInterval(function(){
            var points = '';
            for(var i=0; i < n; i++) {
                points += '.';
            }
            e.text(points);
            n = (n + 1) % 4;
        }, speed || 200);
    e.show(0);
    this.container = e;
    this.stopLoader = function() {
        clearInterval(interval);
        return this.container.hide().text('');
    };
};
