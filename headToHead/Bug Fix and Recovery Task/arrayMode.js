function arrayMode(sequence) {
    var count = [],
        answer = 0;

    for (var i = 0; i < 1000; i++) {
        count.push(0);
    }
    for (var i = 0; i < sequence.length; i++) {
        count[sequence[i] - 1]++;
        if (count[sequence[i] - 1] > count[answer]) {
            answer = sequence[i] - 1;
        }
    }
    return answer + 1;
}
