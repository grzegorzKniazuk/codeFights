function splitAddress(address) {
    let protocol = address.slice(0, address.indexOf(':')),
        domain = address.slice(address.indexOf('/')+2, address.indexOf('.')),
        context = '',
        result = [];
    if (address.indexOf('/')+1!==address.lastIndexOf('/')) {
        context = address.slice(address.lastIndexOf('/')+1, address.length);
        result.push(protocol,domain,context);
    } else {
        result.push(protocol,domain);
    }
    return result;
}