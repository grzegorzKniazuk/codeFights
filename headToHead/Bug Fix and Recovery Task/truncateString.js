function truncateString(s) {

    var truncate = function(l, r) {
        if (l >= r) {
            return '';
        }
        var newL = l;
        var newR = r;
        var left = s.charCodeAt(l) - '0'.charCodeAt(0);
        var right = s.charCodeAt(r - 1) - '0'.charCodeAt(0);
        if (left % 3 === 0) {
            newL++;
        } else if (right % 3 === 0) {
            newR--;
        } else if ((left + right) % 3 === 0) {
            newL++;
            newR--;
        } else {
            return s.substring(l, r);
        }

        return truncate(newL, newR);
    }

    return truncate(0, s.length);
}
