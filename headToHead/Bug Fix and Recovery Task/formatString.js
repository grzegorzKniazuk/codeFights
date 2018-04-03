function formatString(input) {

    var formattedString = [];
    for (var i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
            if (formattedString.length
                && formattedString[formattedString.length-1] !== ' ') {
                formattedString.push(input[i])
            }
        }
        else {
            formattedString.push(input[i]);
        }
    }
    if (formattedString[formattedString.length - 1] === ' ') {
        formattedString.pop();
    }

    return formattedString.join('');
}
