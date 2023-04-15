function positiveSum(arr) {
    let sum = 0;
    if (arr === []) {
        return sum
    }
    sum = arr.reduce((acc, el) => {
        return el > 0 ? acc + el : acc;
    }, 0) ;
    return sum;
}