function quickSort(a, l, r) {

    if (l >= r) {
        return a;
    }

    var x = a[l];
    var i = l;
    var j = r;

    while (i <= j) {
        while (a[i] < x) {
            i++;
        }
        while (a[j] > x) {
            j--;
        }
        if (i <= j) {
            var t = a[i];
            a[i] = a[j];
            a[j] = t;
            i += 1;
            j -= 1;
        }
    }

    quickSort(a, l, j);
    quickSort(a, i, r);

    return a;
}
