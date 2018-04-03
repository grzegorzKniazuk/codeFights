function longestWord(text) {
    let words = [], longest='';
    words = text.split(/,| /);
    for (let i=0,x=words.length;i<x;i++) {
        for(let j=0, y=words[i].length;j<y;j++) {
            if(words[i].charCodeAt(j)<65 ||
                words[i].charCodeAt(j)>90 && words[i].charCodeAt(j)<97 ||
                words[i].charCodeAt(j)>122)
            {
                words[i]=words[i].slice(0,j);
            }
        }
    }
    for (let i=0,x=words.length;i<x;i++) {
        if(words[i].length>longest.length) longest=words[i];
    }
    return longest;
}