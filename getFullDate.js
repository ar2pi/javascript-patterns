/**
 * @description Safe Date parser for ECMA-262 spec
 * @param {string} input yyyy[-|/]mm[-|/]dd[T| ]hh:mm:ssZ every unit is ommitable except the year
 * @returns {Date}
 */
function getFullDate(input) {
    input = (input) ? input.trim() : '';
    if (input.length) {
        var output,
            f = [], d = [], t = [], tz = [],
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
            tz = f[1].split('Z');
            t = tz[0].split(':');
            if (t.length !== 3)
                for (var i = 2; i > 0, typeof t[i] === 'undefined'; i--)
                    t[i] = '0';
            (tz.length > 1) ? output.setUTCHours(t[0], t[1], t[2]) : output.setHours(t[0], t[1], t[2]);
        }
    } else {
        output = new Date();
    }
    return output;
}
