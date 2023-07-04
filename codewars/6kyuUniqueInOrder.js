var uniqueInOrder=function(iterable){
    if (typeof iterable === 'string') {
        return iterable.split('').filter((el,i,arr)=>arr[i]!==arr[i+1]);
    }
    return iterable.filter((el,i,arr)=>arr[i]!==arr[i+1]);
}