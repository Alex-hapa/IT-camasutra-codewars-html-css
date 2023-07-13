function mxdiflg(a1, a2) {
    if(a1.length === 0 || a2.length === 0) {
        return -1;
    }
    const newA1 = a1.map(el => el.length)
    const newA2 = a2.map(el => el.length)
    return Math.max(Math.max(...newA1) - Math.min(...newA2), Math.max(...newA2) - Math.min(...newA1))
}