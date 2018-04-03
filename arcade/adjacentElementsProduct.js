function adjacentElementsProduct(inputArray) {
    let wynik=inputArray[0]*inputArray[1];
    for(let i=1, x=inputArray.length; i<=x; i++) {
        if(inputArray[i]*inputArray[i+1]>wynik) {
            wynik = inputArray[i]*inputArray[i+1];
        }
    }
    return wynik;
}
