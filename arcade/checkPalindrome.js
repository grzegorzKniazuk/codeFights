function checkPalindrome(inputString) {
    let l=inputString.length-1, compare = [];
    for(let i = 0; i<=l; l--) {
        compare.push(inputString.charAt(l));
    }
    let compareString = compare.join('');
    return compareString===inputString;
}
