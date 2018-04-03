function differentValues(a, d) {

    var best = -1;
    for (var i = 0; i < a.length; i++) {
        for (var j = i + 1; j < a.length; j++) {
            var diff = Math.abs(a[j] - a[i]);
            if (diff <= d && best < diff) {
                best = diff;
            }
        }
    }

    return best;
}
