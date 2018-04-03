function bitCount(n) {
    var answer = 0;
    while(n >= 1) {
        if(n & 1) {
            answer++;
        }
        n >>= 1;
    }
    return answer;
}
