function sumFactorial(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let number = arr[i]
        let fact = 1
        for (let j = number; j >= 1; j--) {
            fact *= j
        }
        sum += fact
    }
    return sum
}