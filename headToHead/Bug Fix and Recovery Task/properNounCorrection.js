function properNounCorrection(noun) {

    var isLowercase = function(symbol) {
        if ('a' <= symbol && symbol <= 'z') {
            return true;
        }
        return false;
    }

    var result = [];

    if (isLowercase(noun[0])) {
        result.push(String.fromCharCode(noun[0].charCodeAt()
            - 'a'.charCodeAt() + 'A'.charCodeAt()));
    }
    else {
        result.push(noun[0]);
    }

    for (var i = 1; i < noun.length; i++) {
        if (!isLowercase(noun[i])) {
            result.push(String.fromCharCode(noun[i].charCodeAt()
                - 'A'.charCodeAt() + 'a'.charCodeAt()));
        }
        else {
            result.push(noun[i]);
        }
    }

    return result.join('');
}
