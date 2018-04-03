function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    let yourTop = (yourLeft >= yourRight)?yourLeft:yourRight,
        friendsTop = (friendsLeft >= friendsRight)?friendsLeft:friendsRight;
    if (yourTop !== friendsTop) return false;
    return ((yourLeft+yourRight) === (friendsLeft+friendsRight));
}