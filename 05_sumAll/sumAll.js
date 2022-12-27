const sumAll = function(num1,num2) {
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (typeof num1 != "number" || typeof num2 != "number") return "ERROR";
    let maxNum = num1 > num2 ? num1 : num2;
    let minNum = num1 < num2 ? num1 : num2;
    let sum = 0;
    for (let i = minNum; i <= maxNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
