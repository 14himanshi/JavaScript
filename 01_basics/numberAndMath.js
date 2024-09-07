// Numbers:
// const score = 400
// const num = new Number(100)

// console.log(num) // 400
// console.log(score) // [Number: 100]

// console.log(typeof num) // object
// console.log(typeof score) // number

// console.log(num.toString().length); // 3
// console.log(num.toFixed(2)) // 100.00

// const num1 = 123.8966
// console.log(num1.toPrecision(3)) // 124 // it will return us a string
// console.log(1123.8966.toPrecision(3)) // 1.12e+3
// console.log(num1.toPrecision(4)); // 123.9

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000

// ************************** MATHS ****************************************************************************

// console.log(Math) // Object [Math] {}
// console.log(Math.abs(-4)) // 4
// console.log(Math.abs(4)) // 4
// console.log(Math.round(4.6)) // 5
// console.log(Math.round(4.5)) // 5
// console.log(Math.round(4.2)) // 4
// console.log(Math.ceil(4.2)) // 5
// console.log(Math.floor(4.9)) // 4
// console.log(Math.min(4,3,2,5)) // 2
// console.log(Math.max(4,3,2,5)) // 5

// console.log(Math.random()) // will get value between 0 and 1 only [0,1)
// console.log(Math.floor(Math.random()*10) + 1) // will get values between 1 and 10

const min = 10
const max = 20 
console.log(Math.floor(Math.random() * (max-min+1)) + min ) 
// all values will be between 10 and 20 here [10,20]



