const removeFromArray = function(arr, ...value) {
    const newArr = [];
    arr.forEach((item) => {
        if (!value.includes(item)) {
            newArr.push(item);
        }
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
