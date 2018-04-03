function countSumOfTwoRepresentations(n, l, r) {
    let counter = 0;
    for (let i=l;i<=r;i++) {
        for (let j=i;j<=r;j++) if (i + j === n) counter++;
    }
    return counter;
}