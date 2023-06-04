function descendingOrder(n){
    return Number(String(n).split('').map(Number).sort((a,b)=>b-a).map(String).join(''));
}