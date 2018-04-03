function calculationsWithCoins(a, b, c) {
    let sum = [a,b,c,a+b,a+c,b+c,a+b+c].sort();
    result = sum.filter((item,index) => {
        if (item !== sum[index+1]) return item;
    });
    return result.length;
}