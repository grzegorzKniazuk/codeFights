function firstNotRepeatingCharacter(s) {
    let array = s.split('');
    for (let i = 0, x = array.length; i < x;  i++) {
        if (array.indexOf(array[i]) === array.lastIndexOf(array[i])) return array[i];
    }
    return '_';
}