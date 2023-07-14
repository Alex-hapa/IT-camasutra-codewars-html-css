function remove (string) {
    let result = string;
    if(result[result.length - 1] === '!') {
        result = result.slice(0, -1);
    }
    return result;
}