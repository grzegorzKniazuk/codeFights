function sumOfCubes(n) {
    var result = 0;
    for (var i = 1; i <= n; i++){
        result += i*i*i;
    }
    return result;
}
