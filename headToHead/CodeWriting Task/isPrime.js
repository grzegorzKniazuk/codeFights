function isPrime(n) {
    var count = 0;
    for(let i=0;i<=n;i++)n%i===0?count++:n;
    return count===2?true:false;
}