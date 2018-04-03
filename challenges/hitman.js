function hitman(people) {
    for(let i=people.length;i>1;i--) {
        people.shift();
        people.push(people.shift());
    }
    return people.shift();
}