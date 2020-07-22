const reverseArray = (array) => {
    let reversedArray = [];
    array.forEach((item) => {
        reversedArray.unshift(item);
    });

    return reversedArray;
};

const reverseArrayInPlace = (array) => {
    const length = array.length;

    if (length == 0) return [];

    const middle = Math.floor(length / 2);
    for (let i = 0; i <= middle; i++) {
        let temp = array[i];
        array[i] = array[length - 1 - i];
        array[length - 1 - i] = temp;
    }

    return array;
};