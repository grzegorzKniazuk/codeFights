function magicalWell(a, b, n) {
    var money = 0;
    while (n-- !== 0) {
        money += (a+n)*(b+n);
    }
    return money;
}
