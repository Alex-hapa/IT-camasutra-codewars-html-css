function isValidWalk(walk) {
    let countNS = 0;
    let countWE = 0;
    const arrNS = walk.map(el => {
        if(el === 'n') {
            countNS++;
        }
        if(el === 's') {
            countNS--;
        }
        return countNS;
    })
    const arrWE = walk.map(el => {
        if(el === 'w') {
            countWE++;
        }
        if(el === 'e') {
            countWE--;
        }
        return countWE;
    })
    return walk.length === 10 && countNS === 0 && countWE === 0;
}