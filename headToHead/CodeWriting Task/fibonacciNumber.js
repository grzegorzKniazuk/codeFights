function fibonacciNumber(n) {
    let sum=2;
    for(let i=4,t0=1,t1=2;i<=n;i++){
        console.log(sum);
        sum=t0+t1;
        t0=t1;
        t1=sum;
    }
    return (n<=2)?1:sum;
}