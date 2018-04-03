function isSmooth(arr) {
    let middle = (arr.length%2!==0)?
        arr[parseInt(arr.length/2)]:
        arr[parseInt(arr.length/2)-1]+arr[parseInt(arr.length/2)];
    return middle === arr[0] && middle === arr[arr.length-1];
}