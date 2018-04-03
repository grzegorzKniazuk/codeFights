function alphabeticShift(inputString) {
    for(var i=0, string = [],x=inputString.length;i<x;i++){
        (inputString.charCodeAt(i)+1)===123?string.push(String.fromCharCode((inputString.charCodeAt(i)+1)-26)):string.push(String.fromCharCode(inputString.charCodeAt(i)+1));
    }
    return string.join('');
}