const countChar = (string, char) => {
    let countChar = 0;

    for (let i = 0; i <= string.length -1 ; i++) {
        if (string[i] === char) {
            countChar++;
        }
    }

    return countChar;
};
