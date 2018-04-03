function countTriangles(x, y) {

    var result = 0;
    for (var i = 0; i < x.length; i++) {
        for (var j = i + 1; j < x.length; j++) {
            for (var k = j + 1; k < x.length; k++) {
                var doubleArea = (x[i] - x[j]) * (y[i] - y[k])
                    - (x[i] - x[k]) * (y[i] - y[j]);
                if (doubleArea !== 0) {
                    result++;
                }
            }
        }
    }
    return result;
}
