function differentValuesInMultiplicationTable(n, m) {
    let ans = [];
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            let tmp = i * j;
            if (ans.indexOf(tmp) === -1) ans.push(tmp);
        }
    }
    return ans.length;
}