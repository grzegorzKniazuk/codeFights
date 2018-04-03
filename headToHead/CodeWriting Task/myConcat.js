function myConcat(arguments, separator) {
    let output='';
    for(let i=0, x=arguments.length; i<x; i++) {
        output+=arguments[i]+separator;
    }
    return output;
}