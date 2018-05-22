function firstDuplicate(a) {
    let left = [];
    while (a.length !== 0) {
        if (!left.includes(a[0])) {
            left.push(a.shift());
        } else {
            return a[0];
        }
    }
    return -1;
}