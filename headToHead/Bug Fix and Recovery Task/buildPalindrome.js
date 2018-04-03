function buildPalindrome(st) {
    var canConvert;
    for(var i = st.length; ; i++) {
        canConvert = true;
        for(var j = 0; j < i - j - 1; j++) {
            if(i - j - 1 < st.length && st[j] != st[i - j - 1]) {
                canConvert = false;
                break;
            }
        }
        if(canConvert) {
            for(var j = st.length; j < i; j++) {
                st += st[i - j - 1];
            }
            return st;
        }
    }
}
