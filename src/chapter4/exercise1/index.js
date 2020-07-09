const range = (start, end, step = 1) => {

    let rangeList = [];
    for (let i = start; i <= end; i += step) {
        rangeList.push(i);
    }

    return rangeList;
};

const sum = (array) => {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue);
};
