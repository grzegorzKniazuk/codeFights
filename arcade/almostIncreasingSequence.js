function almostIncreasingSequence(sequence) {
    let counter = 0, left, right;
    for(let i=0,x=sequence.length;i<x;i++) {
        if(sequence[i+1]<=sequence[i]) {
            sequence[i+1]>sequence[i-1]?left = sequence.slice(0,i):left = sequence.slice(0,i+1);
            sequence[i+1]>sequence[i-1]?right = sequence.slice(i+1,sequence.length):right = sequence.slice(i+2,sequence.length);
            if(i===0) {left=[];right=sequence.slice(i+1,sequence.length);}
            sequence = left.concat(right);
            counter++;
            i=-1;
        }
    }
    return counter<=1;
}