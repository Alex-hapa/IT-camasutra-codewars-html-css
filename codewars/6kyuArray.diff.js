function arrayDiff(a, b) {
    return a.filter(el => {
        return !b.includes(el)
    })
}