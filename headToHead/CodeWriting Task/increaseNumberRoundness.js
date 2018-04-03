function increaseNumberRoundness(n) {
    let gotToSignificant = false;
    while(n > 0) {
        if(n % 10 === 0 && gotToSignificant) return true;
        else if(n % 10 !== 0) gotToSignificant = true;
        n = Math.floor(n / 10);
    }
    return false;
}