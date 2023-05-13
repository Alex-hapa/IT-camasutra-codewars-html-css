var number = function(busStops){
    let result = 0;
    for (var i=0; i<busStops.length; i++) {
        result += busStops[i][0];
        result -= busStops[i][1];
    }
    return result;
}