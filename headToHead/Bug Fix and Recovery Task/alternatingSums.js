function alternatingSums(a) {
    var team1 = 0,
        team2 = 0;
    for (var i = 0; i < a.length; i += 2) {
        team1 += a[i];
    }
    for (var i = 1; i < a.length; i += 2) {
        team2 +=  a[i];
    }
    var result = [team1, team2];
    return result;
}
