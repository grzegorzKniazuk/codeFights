function largestDistance(a) {

    var mx = [a[0], a[1]];
    var mn = [a[0], a[1]];
    for (var i = 0; i < a.length; i++) {
        var k = i % 2;
        if (a[i] > mx[k]) {
            mx[k] = a[i];
        } else if (a[i] < mn[k]) {
            mn[k] = a[i];
        }
    }
    return  Math.min(...mn)!==0?Math.max(...mx)-Math.min(...mn):Math.min(...mx);
}
