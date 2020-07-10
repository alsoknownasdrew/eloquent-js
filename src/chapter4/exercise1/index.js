const range = (start, end, step = 1) => {
    if (step === 0) throw new Error('Step can\'t be 0');

    let rangeList = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            rangeList.push(i);
        }
    }
    if (step < 0) {
        for (let i = start; i >= end; i += step) {
            rangeList.push(i);
        }
    }

    return rangeList;
};

const sum = (array) => {
    if (array.length === 0) return 0;

    return array.reduce((accumulator, currentValue) => accumulator + currentValue)
};
