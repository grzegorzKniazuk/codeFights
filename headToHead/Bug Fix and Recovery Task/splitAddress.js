function splitAddress(address) {
    var protocol = '',
        domain = '',
        context = '',
        result = address.split('://');

    protocol = result[0];
    result = result[1].split('.com');
    domain = result[0];
    if (result[1].length) {
        context = result[1].substr(1);
        return [protocol, domain, context]
    }
    return [protocol, domain];
}
