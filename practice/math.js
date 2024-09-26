module.exports             //  int same directory 
const sum = (a,b) => a+b;
const mul = (a,b) => a*b;
const PI = 3.14;

let object = {    //method 1
    sum: sum,
    mul: mul,
    PI: PI
}
module.exports = object;

// module.exports = {  //  method 2
//     sum: sum,
//     mul: mul,
//     PI: PI
// }

// module.exports.sum = (a,b) => a+b;  // method 3
// module.exports.mul = (a,b) => a*b;
// module.exports.PI = 3.14;


// module.exports               // in another directory or floder
