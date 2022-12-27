const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (num < 2) return 1;
    let list = [1,1];
    for (let i = 2; i < num; i++) {
        list[i] = list[i-1] + list[i-2];
    }
    return list[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
