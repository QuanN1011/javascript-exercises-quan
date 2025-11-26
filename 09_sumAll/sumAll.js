const sumAll = function(val1, val2) {
    if (!Number.isInteger(val1) || !Number.isInteger(val2)) return 'ERROR';
    if (val1 < 0 || val2 < 0) return 'ERROR';

    let start = Math.min(val1, val2);
    let end = Math.max(val1, val2);
    let sum = 0;

    for (let i = start; i <= end; i++){
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
