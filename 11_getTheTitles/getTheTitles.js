const getTheTitles = function(array) {
    // let titles = [];
    // for (const book of array) {
    //     titles.push(book.title);
    // }
    // return titles;

    return array.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
