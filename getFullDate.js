/**
 * Safe Date parser for ECMA-262 spec
 * input format:
 *      (2017([-|/]02)?([-|/]24)?)?([T| ]23(:59)?(:59)?(Z)?)?
 */
function getFullDate(input) {
    input = (input) ? input.trim() : '';
    if (input.length) {
        var output,
            f = [], d = [], t = [],
            fs, ds;
        fs = input.match(/T| /);
        (fs !== null) ? f = input.split(fs[0]) : f[0] = input;
        ds = f[0].match(/-|\//);
        (ds !== null) ? d = f[0].split(ds[0]) : d[0] = f[0];
        if (d.length !== 3)
            for (var i = 2; i > 0, typeof d[i] === 'undefined'; i--)
                d[i] = '1';
        output = new Date(d[0], parseInt(d[1]) - 1, d[2]);
        if (typeof f[1] !== 'undefined') {
            t = f[1].split(':');
            if (t.length !== 3)
                for (var i = 2; i > 0, typeof t[i] === 'undefined'; i--)
                    t[i] = '0';
            output.setHours(t[0], t[1], t[2].split('Z')[0]);
        }
    } else {
        output = new Date();
    }
    return output;
}
