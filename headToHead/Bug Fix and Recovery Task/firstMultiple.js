function firstMultiple(divisors, start) {

    for (var answer = start; ; answer++) {
        var correct = true;
        for (var i = 0; i < divisors.length; i++) {
            if (answer % divisors[i]) {
                correct = false;
            }
        }
        if (correct) {
            return answer;
        }
    }
}
