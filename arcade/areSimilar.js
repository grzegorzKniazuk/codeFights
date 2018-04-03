function areSimilar(a, b) {
    let moveCounter = 0;
    while (a.length > 0) {
        if(a[0] !== b[0]) {
            moveCounter++;
            for(let i=0, x=b.length;i<x;i++) {
                if (a[0] === b[i]) {
                    b.splice(i,1,b[0]);
                    break;
                }
            }
        }
        if (moveCounter > 1) return false;
        a.shift();
        b.shift();
    }
    return moveCounter <= 1;
}