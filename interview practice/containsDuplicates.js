function containsDuplicates(a) {
    for (element of a) {
        if (a.indexOf(element) !== a.lastIndexOf(element)) return true;
        a.shift();
    }
    return false;
}

function containsDuplicates(a) {
    let unique = [...new Set(a)];
    return unique.length === a.length;
}