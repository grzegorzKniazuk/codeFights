function amicableNumbers(n) {

    divSum = {}
    divSum[1] = 0;
    for (var i = 1;; i++) {
        var sum = 0;
        for (var j = 1; j < i; j++) {
            if (i % j === 0) {
                sum += j;
            }
        }
        divSum[i] = sum;
        if (sum < i && divSum[sum] === i) {
            if (sum >= n) {
                return sum;
            } else if (i >= n) {
                return i;
            }
        }
    }
}
