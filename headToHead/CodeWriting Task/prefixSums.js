function prefixSums(a) {
    let result = [0];
    for (let i=0,x=a.length;i<x;i++) {
        result.push(result[i]+a[i]);
    }
    result.shift();
    return result;
}