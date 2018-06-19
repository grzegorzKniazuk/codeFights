function isCryptSolution(crypt, solution) {
    let numbers = [], digits = '';

    for (let i = 0; i < 3; i++) { // word
        for (let j = 0; j < crypt[i].length; j++) { // word letter
            for (let k = 0; k < solution.length; k++) { // solution key
                if (solution[k].indexOf(crypt[i][j]) === 0) {
                    if (solution[k][1] === '0' && j === 0 && crypt[i].length !== 1) return false;
                    else digits += solution[k][1];
                }
            }
        }
        numbers.push(parseInt(digits));
        digits = '';
    }
    return (numbers[0]+numbers[1] === numbers[2]);
}