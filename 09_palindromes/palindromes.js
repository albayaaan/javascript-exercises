const palindromes = function (string) {
    string = string.toLowerCase();
    let splitString = string.match(/[a-z]/g);
    let reverseString = splitString.slice().reverse();
    return splitString.join() ==  reverseString.join();
};

// Do not edit below this line
module.exports = palindromes;
