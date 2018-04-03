function replaceAllDigitsRegExp(input) {
    let string = input.split(''),
        result = '';
    for (value of string) {
        if (Number.isInteger(parseInt(value))) result+='#';
        else result+=value;
    }
    return result;
}