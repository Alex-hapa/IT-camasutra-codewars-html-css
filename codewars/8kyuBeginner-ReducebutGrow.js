function grow(x){
    return x.reduce((acc, el) => {
        return acc * el;
    }, 1)
}