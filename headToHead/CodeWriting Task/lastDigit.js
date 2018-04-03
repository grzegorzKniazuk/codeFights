function lastDigit(a, b) {
    a=a%10;
    if (b===0) return 1;
    if (b===1) return a;
    switch (a) {
        case 1: return 1;
        case 2: return Math.pow(2,(b%4)+4)%10;
        case 3: return Math.pow(3, (b%4)+4)%10;
        case 4: return Math.pow(3, (b%2)+2)%10;
        case 5: return 5;
        case 6: return 6;
        case 7: return Math.pow(7, (b%4)+4)%10;
        case 8: return Math.pow(8, (b%4)+4)%10;
        case 9: return Math.pow(9, (b%2)+2)%10;
        case 0: return 0;
    }
    return a;
}