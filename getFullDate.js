/******************************************/
// Safe GMT date parser for ECMA-262 spec //
/******************************************/
function getFullDate(input) {
    // input format 2017[-|/]12[-|/]01[[T| ]12:00:00[Z|]|]
    input = (input && input.length) ? input.trim() : '';
    if (input.length) {
        var output,
            f = [], d = [], t = [],
            fs = input.match(/T| /), ds = input.match(/-|\//);
        (fs !== null) ? f = input.split(fs[0]) : f[0] = input;
        (ds !== null) ? d = f[0].split(ds[0]) : d = '';
        if (d.length) {
            output = new Date(d[0], parseInt(d[1]) - 1, d[2]);
            if (typeof f[1] !== 'undefined') {
                t = f[1].split(':');
                output.setHours(t[0], t[1], t[2].split('Z')[0]);
            }
        } else {
            output = new Date();
        }
    } else {
        output = new Date();
    }
    return output;
}
