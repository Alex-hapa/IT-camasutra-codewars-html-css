function powersOfTwo(n){
    const res = [];
    for (let i = 0; i <= n; i++) {
        res.push(2**i)//res.push(Math.pow(2, i))
    }
    return res;
}