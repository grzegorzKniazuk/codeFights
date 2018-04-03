function isGeometricProgression(sequence) {
    for(let i=1,x=sequence.length, s=Math.abs(sequence[1]/sequence[0]);i<x;i++) {
        if (sequence[i]!==s*sequence[i-1]) return false;
    }
    return true;
}