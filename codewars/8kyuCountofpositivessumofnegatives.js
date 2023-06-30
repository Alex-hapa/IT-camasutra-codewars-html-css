function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1){
        return [];
    }
    const result = [];
    let count = 0;
    const arrNegative = input.filter(el => el < 0)
    const sumNegative = arrNegative.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            count++
        }
    }
    result.push(count, sumNegative);
    console.log(result)
    return result;
}