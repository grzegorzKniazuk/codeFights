function circleOfNumbers(n, firstNumber) {
    let digits = [];
    for (let i = 0; i < n; i++) digits.push(i);
    digits = digits.concat(digits);
    return digits[firstNumber + parseInt(n / 2)];
}