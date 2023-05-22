function findAverage(array) {
    if(array.length === 0) {
        return 0;
    }
    return array.reduce((acc, el) => {
        return acc + el;
    }, 0) / array.length
}