function oddOrEven(array) {
    const result = array.reduce((acc, el) => {
        return acc + el
    }, 0)
    return result % 2 === 0 ? 'even' : 'odd';
}