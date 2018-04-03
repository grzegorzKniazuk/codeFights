function isSumOfConsecutive(n) {
    if (n === 1) return false;
    let sums = [];
    for (let i = Math.ceil(n / 2); i >= 0; i--) {
        for (let j = 0; j < sums.length; j++) {
            sums[j] += i;
        }
        sums.push(i);
        if (sums.indexOf(n) !== -1) return true;
    }
    return false;
}