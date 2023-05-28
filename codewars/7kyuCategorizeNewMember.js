function openOrSenior(data){
    return data.map(el => {
        if(el[0] >= 55 && el[1] > 7) {
            return 'Senior'
        } else {
            return 'Open'
        }
    })
}