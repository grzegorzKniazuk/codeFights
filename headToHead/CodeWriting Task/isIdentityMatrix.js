function isIdentityMatrix(n) {
    let check=true;
    for(let i=0;i<n.length;i++) {
        for(let j=0;j<n[i].length;j++) {
            if(i===j) check = (n[i][j] === 1);
            if(i!==j) check = (n[i][j] === 0);
            if(!check) return check;
        }
    }
    return check;
}