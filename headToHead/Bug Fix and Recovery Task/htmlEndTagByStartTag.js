function htmlEndTagByStartTag(startTag) {

    var result = ['</'],
        position = 1;
    while (startTag[position] !== ' ' && startTag[position] !== '>') {
        result.push(startTag[position++]);
    }
    result.push('>');
    return result.join('');
}
