const caesar = function(string,num) {
    num %= 26;
    let result = "";
    for (let i = 0; i < string.length; i++) {
        // ascii 65 - 90
        if (/[A-Z]/.test(string[i])) {
            let chiper = string[i].charCodeAt(0) + num;
            if (chiper < 65) {
                chiper = 90+1 - (65-chiper);
            } else if (chiper > 90) {
                chiper = 65-1 + (chiper - 90);
            }
            result += String.fromCharCode(chiper);
        }

        // ascii 97 - 122
        else if (/[a-z]/.test(string[i])) {
            let chiper = string[i].charCodeAt(0) + num;
            if (chiper < 97) {
                chiper = 122+1 - (97-chiper);
            } else if (chiper > 122) {
                chiper = 97-1 + (chiper - 122);
            }
            result += String.fromCharCode(chiper);
        }
        
        // selain alphabet
        else {
            result += string[i];
        }
    }
    return result;
};

// Do not edit below this line
module.exports = caesar;
