function rowWeights(array){
    let weightCount1 = 0;
    let weightCount2 = 0;
    const res = [];
    for (let i = 0; i < array.length; i += 2) {
        weightCount1 += array[i];
    }
    for (let i = 1; i < array.length; i += 2) {
        weightCount2 += array[i];
    }
    res.push(weightCount1, weightCount2)
    return res;
}