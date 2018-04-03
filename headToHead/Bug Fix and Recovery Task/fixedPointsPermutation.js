function fixedPointsPermutation(permutation) {

    var result = 0;

    for (var i = 0; i < permutation.length; i++) {
        if (permutation[i] === i+1) {
            result++;
        }
    }

    return result;
}