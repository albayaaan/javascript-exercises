const add = function(num1,num2) {
	 return num1+num2;
};

const subtract = function(num1,num2) {
  return num1-num2;
};

const sum = function(array) {
	// let total = 0;
  // for (let i = 0; i < array.length; i++) {
  //   total += array[i];    
  // }
  // return total;

  return array.reduce((total, current) => {
    console.log(total);
    return total + current;
  }, 0);
};

const multiply = function(array) {
  // let total = 1;
  // for (let i = 0; i < array.length; i++) {
  //   total *= array[i];    
  // }
  // return total;

  return array.reduce((total, current) => total*current);
};

const power = function(num1,num2) {
	// return num1**num2;
  return Math.pow(num1,num2);
};

const factorial = function(num) {
  // let total = 1;
  // for (let i = 1; i <= num; i++) {
  //   total *= i;    
  // }
  // return total;

  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
