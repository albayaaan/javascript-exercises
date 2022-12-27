const findTheOldest = function(array) {
    let ind = 0;
    let oldestAge = 0;
    for (let i = 0; i < array.length; i++) {
        if (!array[i].hasOwnProperty('yearOfDeath')) {
            let today = new Date();
            array[i].yearOfDeath = today.getFullYear();
        }
        let age = array[i].yearOfDeath - array[i].yearOfBirth; 
        if (age > oldestAge) {
            ind = i;
            oldestAge = age;
        }
    }
    return array[ind];
};

// Do not edit below this line
module.exports = findTheOldest;
