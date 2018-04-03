function reflectString(inputString) {
    let output = '',charcode, difference;
    for(let i=0,x=inputString.length;i<x;i++) {
        charcode = inputString.charCodeAt(i);
        difference = Math.abs(97-charcode);
        output+=String.fromCharCode(122-difference);
    }
    return output;
}