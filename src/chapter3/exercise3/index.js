const countBs = string => {
    let countB = 0;

    for (let i = 0; i <= string.length -1 ; i++) {
        if (string[i] === 'B') {
            countB++;
        }
    }

    return countB;
};

const countChar = (string, char) => {
    let countChar = 0;

    for (let i = 0; i <= string.length -1 ; i++) {
        if (string[i] === char) {
            countChar++;
        }
    }

    return countChar;
};
