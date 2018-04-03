function arithmeticExpression(a, b, c) {

    if (a + b === c || a * b === c || b * c === a || a - b === c) {
        return true;
    }
    return false;
}
