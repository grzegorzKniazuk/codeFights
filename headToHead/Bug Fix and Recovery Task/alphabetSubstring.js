function alphabetSubstring(s) {
    for (let i = 0; i < s.length-1; i++) {
        if (s[i].charCodeAt() !== s[i + 1].charCodeAt() - 1) {
            return false;
        }
    }
    return true;
}
