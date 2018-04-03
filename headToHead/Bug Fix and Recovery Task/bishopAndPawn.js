function bishopAndPawn(bishop, pawn) {

    var getX = function(pos) {
        return pos.charCodeAt() - 'a'.charCodeAt();
    }
    var getY = function(pos) {
        return pos.charCodeAt() - '1'.charCodeAt();
    }

    var x1 = getX(bishop[0]),
        y1 = getY(bishop[1]),
        x2 = getX(pawn[0]),
        y2 = getY(pawn[1]);

    if (x1 + y1 === x2 + y2 || x1 - y1 === x2 - y2) {
        return true;
    }

    return false;
}
