function factorizedGCD(a, b) {
    let aMulti=1, bMulti=1, gcd=1;
    for (let i=0,x=a.length;i<x;i++) aMulti*=a[i];
    for (let i=0,x=b.length;i<x;i++) bMulti*=b[i];
    for (let i=0,
             x=(aMulti>bMulti?bMulti:aMulti),
             y=(aMulti>=bMulti?aMulti:bMulti);
         i<=x;i++)
    {
        if(y%i===0&&x%i===0) gcd=i;
    }
    return gcd;
}