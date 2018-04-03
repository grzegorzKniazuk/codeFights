function checkSameElementExistence(arr1, arr2) {
    for (let i = 0,x=arr1.length; i<x; i++) {
        if (arr2.indexOf(arr1[i]) !== -1) return true;
    }
    return false;
}