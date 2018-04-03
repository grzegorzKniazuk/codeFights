function commonCharacterCount(s1, s2) {
    for(var i=0, counter=0,x=s1.length;i<x;i++) {
        for(let j=0,y=s2.length;j<y;j++) {
            if(s1[i]===s2[j]) {
                let left=s2.slice(0,j);
                let right=s2.slice(j+1,s2.length);
                s2 = left.concat(right);
                counter++;
                break;
            }
        }
    }
    return counter;
}