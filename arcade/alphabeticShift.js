function alphabeticShift(inputString) {
    let result = [];
    for(index in inputString) {
        if (inputString.charCodeAt(index) === 122) {
            result.push(97);
        } else {
            result.push(inputString.charCodeAt(index)+1);
        }
    }
    return String.fromCharCode(...result);
}