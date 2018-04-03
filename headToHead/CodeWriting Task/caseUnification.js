function caseUnification(inputString) {

    var changesToMakeUppercase = inputString.match(/[a-z]/g),
        changesToMakeLowercase = inputString.match(/[A-Z]/g);

    if (changesToMakeUppercase === null
        || changesToMakeLowercase !== null
        && changesToMakeUppercase.length < changesToMakeLowercase.length) {
        return  inputString.toUpperCase();
    }
    else {
        return inputString.toLowerCase();
    }
}