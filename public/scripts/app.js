'use strict';

// const square = function(x) {
//     return x * x;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// // arrow function part
// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));

// Challenge - Use arrow functions
// getFirstname('Mike Smith) -> 'Mike'
// create regular arrow function
// create arrow function using shorthand syntax
var fullName = 'Mike Smith';

var getFirstname = function getFirstname(fullName) {
    var firstName = fullName.split(' ')[0];
    return firstName;
};

var getFirstname2 = function getFirstname2(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstname(fullName));
console.log(getFirstname2(fullName));
