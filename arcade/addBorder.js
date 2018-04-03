function addBorder(picture) {
    let arrWidth=picture[0].length+2,
        arrHeight=picture.length,
        topAndBottom='',
        output=[];
    for(let i=0;i<arrWidth;i++) topAndBottom+='*';
    output.push(topAndBottom);
    for(let i=0;i<arrHeight;i++) output.push('*'+picture[i]+'*');
    output.push(topAndBottom);
    return output;
}