function howMuchILoveYou(nbPetals) {
    const arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    if (nbPetals < 7) {
        return arr[nbPetals - 1]
    }
    if (nbPetals % 6 === 0) {
        return arr[5]
    }
    return arr[nbPetals % 6 - 1];
}
