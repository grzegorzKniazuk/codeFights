function longestSequence(a) {

    var best = 1;
    for (var i = 0; i < a.length; i++) {
        for (var j = i + 1; j < a.length; j++) {
            var diff =  a[j] - a[i];
            if (diff === 0) {
                continue;
            }
            var cur = 1;
            var last = a[i];
            for (var k = j; k < a.length; k++) {
                if (a[k] - last === diff) {
                    cur++;
                    last = a[k];
                }
            }
            if (cur > best) {
                best = cur;
            }
        }
    }

    return best;
}
