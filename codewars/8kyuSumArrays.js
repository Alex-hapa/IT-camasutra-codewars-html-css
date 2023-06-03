function sum (numbers) {
    "use strict";
    return numbers.reduce((acc, el)=>{return acc + el},0);
};