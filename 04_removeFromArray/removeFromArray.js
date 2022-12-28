const removeFromArray = function(array,...args) {
    // for (let i = 0; i < args.length; i++) {
    //     let ind = array.indexOf(args[i]);
    //     if (ind != -1) array.splice(ind,1);
    // }
    // return array

    // let result = [];
    // array.forEach(item => {
    //     if (!args.includes(item)) {
    //         result.push(item);
    //     }
    // });
    // return result;

    return array.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
