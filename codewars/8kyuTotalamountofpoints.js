function points(games) {
    let count = 0;
    let arr = games.map(el => {
        if(parseInt(el[0]) > parseInt(el[2])) {
            count = count + 3;
        }
        if(parseInt(el[0]) === parseInt(el[2])) {
            count = count + 1;
        }

        return count;
    })
    return count;
}