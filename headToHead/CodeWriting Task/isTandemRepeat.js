isTandemRepeat=(a)=>{
    let len = a.length;
    return ((len&1)===0)?(a.slice(0, Math.floor(len/2))===a.slice(Math.ceil(len/2))):false;
};
