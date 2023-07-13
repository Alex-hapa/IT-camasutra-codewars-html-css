function minValue(values){
    const newValues = [... new Set(values)]
    return Number(newValues.sort((a,b)=>a-b).join(''))
}