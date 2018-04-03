function onlyEvenNumbers(left, right) {
    let output=[];
    for(let i=left;i<=right;i++) {
        if(i%2===0) output.push(i);
    }
    return output;
}