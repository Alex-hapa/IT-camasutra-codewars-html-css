function countSheeps(arrayOfSheep) {
    let count = 0;
    arrayOfSheep.forEach(el => {
        if( el === true) {
            count++;
        }
    })
    return count;
}