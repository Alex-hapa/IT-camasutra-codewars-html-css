function correct(string)
{
    return string.split('').map(el => {
        if(parseInt(el) === 0) {
            return 'O';
        }
        if(parseInt(el) === 5) {
            return 'S';
        }
        if(parseInt(el) === 1) {
            return 'I'
        }
        return el;
    }).join('');
}