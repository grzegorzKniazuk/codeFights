function isLucky(n) {
    let nString = n.toString(),
        left=nString.slice(0,nString.length/2),
        right=nString.slice(nString.length/2,nString.length);
    for(var i=0, sumLeft=0, sumRight=0, x=nString.length/2;i<x;i++) {
        sumLeft+=parseInt(left[i]);
        sumRight+=parseInt(right[i]);
    }
    return sumLeft===sumRight;
}