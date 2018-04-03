function shapeArea(n) {
    let r = n+(n-1), total = r; r--;
    while(r > 0) {
        total = total + 2*(r-1);
        r-=2;
    }
    return total;
}
