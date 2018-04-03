function maxDivisor(left, right, divisor) {
    let result = -1;
    for (let i=left;i<=right;i++) {
        if (i % divisor === 0) result = i;
    }
    return result;
}