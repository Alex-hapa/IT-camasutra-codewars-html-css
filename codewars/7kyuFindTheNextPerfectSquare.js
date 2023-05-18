function findNextSquare(sq) {
    let res = 0;
    if(Math.sqrt(sq).toString().includes('.') === false) {
        res = Math.sqrt(sq) + 1;
        return Math.pow(res, 2) ;
    }
    return -1;
}