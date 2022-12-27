const removeFromArray = function(array,...args) {
    for (let i = 0; i < args.length; i++) {
        let ind = array.indexOf(args[i]);
        if (ind != -1) array.splice(ind,1);
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
