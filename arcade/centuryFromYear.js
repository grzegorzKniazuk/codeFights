function centuryFromYear(year) {
    if (year>1000 && year%100!==0)      return parseInt(year/100)+1;
    else if(year<=1000 && year%100!==0) return parseInt(year/100)+1;
    else if(year<=1000)                 return parseInt(year/100);
    else                                return parseInt(year/100);
}
