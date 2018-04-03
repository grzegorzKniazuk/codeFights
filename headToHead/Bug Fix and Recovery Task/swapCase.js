function swapCase(text) {

    var answer = [];

    for (var i = 0; i < text.length; i++) {
        if (text[i] === text[i].toUpperCase()) {
            answer.push(text[i].toLowerCase());
        }
        else {
            answer.push(text[i].toUpperCase());
        }
    }
    return answer.join('');
}
