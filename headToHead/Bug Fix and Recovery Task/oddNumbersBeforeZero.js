function oddNumbersBeforeZero(sequence) {

    var result = 0;
    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] === 0) {
            break;
        }
        if (sequence[i] % 2 === 1) {
            result++;
        }
    }
    return result;
}
