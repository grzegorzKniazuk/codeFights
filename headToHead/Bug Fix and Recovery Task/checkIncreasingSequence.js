function checkIncreasingSequence(seq) {

    for (var i = 1; i < seq.length; i++) {
        if (seq[i] <= seq[i - 1]) {
            return false;
        }
    }

    return true;
}
