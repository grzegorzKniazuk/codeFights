function insertDashes(inputString) {
    let result = [];

    for (let i=0,x=inputString.length; i<x; i++) {
        if (inputString[i].charCodeAt() !== 32) {
            if (i === 0) result.push(inputString[i]);
            else if (result[result.length] !== '-') result.push('-'+inputString[i]);
        } else {
            result.push(inputString[i]);
        }
    }

    return result.join('');
}