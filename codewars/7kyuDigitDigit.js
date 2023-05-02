function squareDigits(num) {
    if (num === 0) {
        return 0;
    }
    const digits = String(num)
        .split("")
        .map(Number)
        .map((el) => el ** 2)
        .join("");
    let result = parseInt(digits);
    return result;
}