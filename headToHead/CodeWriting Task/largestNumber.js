function largestNumber(n) {
    let result = [];
    for (let i=0;i<n;i++) result.push(9);
    return parseInt(result.reduce((prev,curr) => {
        return (prev.toString()+curr.toString());
    }));
}
