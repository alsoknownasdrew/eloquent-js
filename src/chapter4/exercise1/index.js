const range = (start, end) => {
    let rangeList = [];
    for (let i = start; i <= end; i++) {
        rangeList.push(i);
    }

    return rangeList;
};

const sum = (array) => {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue);
};
