function mySqrt(n) {

    var left = 1, right = n + 1;
    while (left + 1 < right) {
        var middle = Math.floor((left + right) / 2);
        if (middle * middle <= n) {
            left = middle;
        }
        else {
            right = right-1;
        }
    }

    return left;
}
