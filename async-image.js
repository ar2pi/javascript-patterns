/*
 * load image in browser cache
 */
(new Image()).src = 'url/to/image.svg';
// Note: src property can also be set multiple times to load multiple images via same object

/*
 * defer rendering
 */
var lazyImage = new Image();
lazyImage.onload = function() {
    target.src = this.src;
};
lazyImage.src = 'url/to/image.svg';

/*
 * with jquery
 */
jQuery.get(imgSrc)
    // prevent background from being changed if no img is found
    .done(function() {
        jQuery('.target').css('background-image', 'url(' + imgSrc + ')');
    });
