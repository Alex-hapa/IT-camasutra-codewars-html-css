var cubeChecker = function(volume, side){
    return volume > 0 && volume / side ** 2 === side ? true : false
};