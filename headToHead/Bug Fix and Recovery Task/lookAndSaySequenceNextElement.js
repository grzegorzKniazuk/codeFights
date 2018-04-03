function lookAndSaySequenceNextElement(element) {
    let result = "";
    let count = 1;
    let digit = element[0];
    for (let i = 1; i < element.length; i++) {
        if (digit === element[i]) {
            count++;
        } else {
            res += count + digit;
            digit = element[i];
            count = 1;
        }
    }
    return result + count + digit;
}

function lookAndSaySequenceNextElement(inputString) {

    var consecutiveEqual = 1;
    var result = [];
    inputString += '#';
    for (var i = 1; i < inputString.length; i++) {
        if (inputString[i] !== inputString[i - 1]) {
            result.push(consecutiveEqual);
            result.push(inputString[i - 1]);
            consecutiveEqual = 1;
        }
        else {
            consecutiveEqual++;
        }
    }

    return result.join('');
}
