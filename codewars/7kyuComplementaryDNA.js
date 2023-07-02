function DNAStrand(dna) {
    return dna
        .split('')
        .map(el => {
            switch (el) {
                case 'A':
                    return 'T';
                case 'T':
                    return 'A';
                case 'G':
                    return 'C';
                case 'C':
                    return 'G';
            }
        })
        .join('');
}