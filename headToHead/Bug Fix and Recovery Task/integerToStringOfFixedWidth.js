function integerToStringOfFixedWidth(number, width) {

    var result = [];
    var position;

    for (var i = 0; i < width; i++) {
        result.push(0);
    }

    position = width - 1;
    while (number && position >= 0) {
        result[position] = number % 10;
        number = Math.floor(number / 10)
        position--;
    }

    return result.join('');
}
