/**
 * Write a function countBs that takes a string as its only argument and returns
 * a number that indicates how many uppercase “B” characters there are in the
 * string. 
 * 
 * Next, write a function called countChar that behaves like countBs,
 * except it takes a second argument that indicates the character that is to be
 * counted (rather than counting only uppercase “B” characters). Rewrite countBs
 *  to make use of this new function.
 */

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

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4