function arrayCenter(A) {
    let n = A.length,
        B = [],
        sumA = A[0],
        minA = A[0];
    for (let i=1; i < n; i++) {
        sumA += A[i];
        minA = Math.min(minA, A[i]);
    }
    for (let i=0;i<n;i++) {
        if (Math.abs(n*A[i]-sumA) < n*minA) {
            B.push(A[i]);
        }
    }
    return B;
}