function isIPv4Address(inputString) {
    let inputArray = inputString.split('.');
    if (inputArray.length !== 4) return false;
    for (let i=0;i<4;i++) {
        if (inputArray[i].length === 0) return false;
        if (parseInt(inputArray[i]).toString() !== inputArray[i]) return false;
        if (inputArray[i] > 255 || inputArray[i] < 0) return false;
    }
    return true;
}