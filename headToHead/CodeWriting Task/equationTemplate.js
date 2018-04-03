function equationTemplate(values) {
    let results = [values[0], values[1], values[2], values[3], values[0]*values[1]*values[2],
        values[1]*values[2]*values[3], values[2]*values[3]*values[0], values[3]*values[0]*values[1]];
    console.log(values);
    for (let i=0,x=results.length;i<x;i++) {
        for (let j=0,y=results.length;j<y;j++) {
            if (results[i] === results[j] && i !== j) results.splice(i,1);
        }
    }
    for (let i=0,x=values.length;i<x;i++) {
        for (let j=i+1,y=values.length;j<y;j++) {
            results.push(values[i] * values[j]);
        }
    }
    console.log(results);
    for (let i=0,x=results.length;i<x;i++) {
        for (let j=0,y=results.length;j<y;j++) {
            if (results[i] === results[j] && i !== j) return true;
        }
    }

    return false;
}