const findTheOldest = function(array) {
    // let ind = 0;
    // let oldestAge = 0;
    // for (let i = 0; i < array.length; i++) {
    //     if (!array[i].hasOwnProperty('yearOfDeath')) {
    //         let today = new Date();
    //         array[i].yearOfDeath = today.getFullYear();
    //     }
    //     let age = array[i].yearOfDeath - array[i].yearOfBirth; 
    //     if (age > oldestAge) {
    //         ind = i;
    //         oldestAge = age;
    //     }
    // }
    // return array[ind];

    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    })
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
