var number=function(array){
    let res;
    if(array.length === 0) {
        return [];
    } else {
        res = array.map((el, i) => {
            return  `${i + 1}: ${el}`;
        });
        return res;
    }
}