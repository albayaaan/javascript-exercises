const reverseString = function(string) {
    // let result = '';
    // for (let i = string.length-1; i >= 0; i--) {
    //     result += string[i];
    // }
    // return result;

    return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
