function cupVolume(d1, d2, height){
    return Number((Math.PI * height / 3 * ((d1 / 2) ** 2 + (d2 / 2) ** 2 + (d1 / 2) * (d2 / 2))).toFixed(2));
}