function binaryPyramid(m,n){
    let sum = 0;
    for (let i = m ; i <= n; i++) {
        sum += parseInt(i.toString(2))
    }
    return sum.toString(2);
}