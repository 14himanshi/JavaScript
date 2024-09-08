// if
// if(condition ){
//     statements to be executed
// }
// comparison operators:   <, >, <=, >=, ==(equates),!= ,===(yeh type bhi check karta hai) , 

// asse bhi kar sakte hai, isko bolte hai implict scope, yeh aacha way nahi hai scope dikhane ka this can be very confusing
const balance = 1000
// if(balance > 500) console.log("test"), 
// console.log("test again");

// falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy values: true, "0", 'false', "false", " ", [], {}, function(){}, 

// Nullish Coalescing Operator (??) : null and undefined
let val1
// val1 = 5 ?? 10 // 5
// val1 = null ?? 10 // 10 
// val1 = undefined ?? 15 //15
val1 = null ?? 10 ?? 20  // 10
console.log(val1); 



