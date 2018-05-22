function absoluteValuesSumMinimization(a) {
    if      (a.length % 2 !== 0 ) return a[Math.round((a.length - 1) / 2)];
    else if (a.length % 2 === 0 ) return (a[Math.round((a.length - 1) / 2)]<a[Math.round((a.length) / 2)])?
             a[Math.round((a.length - 1) / 2)]:a[Math.round((a.length - 2) / 2)];
}