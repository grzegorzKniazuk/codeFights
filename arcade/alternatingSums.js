function alternatingSums(a) {
    if(a.length<2) { a.push(0); return a; }
    let sums=[];
    let teamA=[] = a.filter(function (value,index) {
        return index%2===0?value:0;
    });
    let teamB=[] = a.filter(function (value,index) {
        return index%2!==0?value:0;
    });
    sums.push(teamA.reduce(function (previousValue, currentValue) {
        return previousValue+currentValue;
    }));
    sums.push(teamB.reduce(function (previousValue, currentValue) {
        return previousValue+currentValue;
    }));
    return sums;
}