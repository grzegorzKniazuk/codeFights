function isArithmeticProgression(sequence) {
    let diff = sequence[1]-sequence[0];
    for(let i=1;i<sequence.length-1;i++) {
        if(sequence[i]+diff !== sequence[i+1]) {
            return false;
        }
    }
    return true;
}