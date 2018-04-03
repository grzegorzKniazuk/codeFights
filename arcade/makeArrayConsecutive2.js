function makeArrayConsecutive2(statues) {
    let min = Math.min.apply(Math, statues),
        max = Math.max.apply(Math, statues),
        counter = 0;
    for(let i = min; i <= max; i++) {
        if(statues.indexOf(i)===-1) counter++;
    }
    return counter;
}