function isUppercase(symbol) {
    console.log(symbol.toUpperCase());
    console.log(symbol.toLowerCase());
    if(symbol.charCodeAt(0) < 65 || symbol.charCodeAt(0) > 122 || (symbol.charCodeAt(0) >= 91 && symbol.charCodeAt(0) <= 96)) {
        return false;
    }
    if(symbol === symbol.toUpperCase()) {
        return true;
    }
    else if(symbol === symbol.toLowerCase()) {
        return false;
    }
}
