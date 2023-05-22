function spacey(array){
    let res =[];
    let el = array[0];
    for (let i = 1; i < array.length + 1; i++) {
        res.push(el);
        el = el + array[i];
    }
    return res;
}