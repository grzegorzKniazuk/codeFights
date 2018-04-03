function formatString(input) {
    let outputArray=[], output='';
    outputArray = input.split(' ');
    for(let i=0,x=outputArray.length;i<x;i++) {
        if(outputArray[i]!=='') {
            output+=outputArray[i]+' ';
        }
    }
    return output.trim();
}