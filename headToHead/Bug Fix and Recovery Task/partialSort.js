function partialSort(input, k) {
    var answer = [],
        infinity = 1e9;

    for (var i = 0; i < k; i++) {
        var index = 0;
        for (var j = 0; j < input.length; j++) {
            if (input[j] < input[index]) {
                index = j;
            }
        }
        answer.push(input[index]);
        input[index] =  infinity;
    }
    for (var i = 0; i < input.length; i++) {
        if (input[i] !== infinity) {
            answer.push(input[i]);
        }
    }

    return answer;
}
