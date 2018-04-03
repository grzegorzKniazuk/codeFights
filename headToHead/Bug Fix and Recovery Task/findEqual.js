function findEqual(sequence) {

    for (var i = 0; i < sequence.length; i++) {
        for (var j = i+1; j < sequence.length; j++) {
            if (sequence[i] === sequence[j]) {
                return true;
            }
        }
    }
    return false;
}
