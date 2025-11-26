const fibonacci = function(val) {
    val = Number(val);
    if (val < 0) return "OOPS";
    if (val === 0) return 0;
    if (val === 1) return 1;

    let a = 0, b = 1, temp;

    for (let i = 2; i <= val; i++){
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;

};

// Do not edit below this line
module.exports = fibonacci;
