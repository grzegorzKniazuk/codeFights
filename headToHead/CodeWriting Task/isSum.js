function isSum(value) {
    let i = 1;
    while (value > 0) {
        value -= i;
        i++;
    }
    return !value;
}