function numberOfEvenDigits(n) {
    var num = n.toString();
    var even = 0;
    for(let i=0, x=num.length;i<=x;i++) {
        if (num[i]%2===0) {
            even++;
        }
    }
    return even;
}