function XO(str) {
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'x') {
            countX++;
        }
        if (str[i].toLowerCase() === 'o') {
            countO++;
        }
    }
    if (countX === countO) {
        return true
    } else {
        return false
    }
    return true;
}