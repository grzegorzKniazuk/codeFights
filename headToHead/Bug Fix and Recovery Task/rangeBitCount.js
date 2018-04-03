function rangeBitCount(a, b) {

    var ans = 0;
    for (var i = a; i <= b; i++) {
        var t = i;
        while (t !== 0) {
            ans += t%2;
            t >>= 1;
        }
    }

    return ans;
}
