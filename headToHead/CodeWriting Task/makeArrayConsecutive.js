function makeArrayConsecutive(sequence) {
    let min = Math.min.apply(Math, sequence),
        max = Math.max.apply(Math, sequence),
        result = [];
    for (let i=min;i<max;i++) {
        if(!sequence.includes(i,0)) result.push(i);
    }
    return result;
}