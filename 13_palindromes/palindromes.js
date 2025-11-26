const palindromes = function (str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    for(let i = 0; i < cleanedStr.length / 2; i++) {
        if(cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
            return false;
        }
    }
    return true;


};

// Do not edit below this line
module.exports = palindromes;
