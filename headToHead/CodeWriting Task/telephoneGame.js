function telephoneGame(messages) {
    let  answer = -1;
    for (let i = 1; i < messages.length; i++) {
        if (messages[i] !== messages[i - 1]) {
            answer = i;
            break;
        }
    }
    return answer;
}