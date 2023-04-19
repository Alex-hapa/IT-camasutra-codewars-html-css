function accum(s) {
    let lettersArray = [];
    for (i = 0; i < s.length; i++) {
        lettersArray.push(s[i].toUpperCase() + s[i].repeat(i).toLowerCase());
    }
    return lettersArray.join('-');
}