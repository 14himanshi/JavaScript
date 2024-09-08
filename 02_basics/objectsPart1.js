// there are two ways to declare on object: like an literal or like a constructor
// singleton: when we make object through constructor it is singleton. means iske jaise yeh ek hi object hai, uska ek hi instance hota hai. whereas when we make it through literal then it is not made as a singleton, uske ek se jyada instances hote hai

// object has key and value pairs
// we can access values through keys

const mySym = Symbol("key1")

// object creation through constructor
// Object.create

// object creation through literals
const JsUser = {
    name: 'leo',
    "full name": "Leo Vyas",
    [mySym]: "myKey1",
    age: 1,
    location: 'mumbai',
    email: 'leo@fun.com',
    loggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// how to access values in objects
// console.log(JsUser.email); // this is a way, but this is not the right way
// console.log(JsUser["email"]);
// console.log(JsUser.full name);// this is a wrong way as this syntax is not allowed
// console.log(JsUser["full name"]);

/* const JsUser = {
    name: 'leo',
    "full name": "Leo Vyas",
    mySym: "myKey1",
    age: 1,
    location: 'mumbai',
    email: 'leo@fun.com',
    loggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}
*/
// this is the wrong way to use a symbol in a object 
// console.log(JsUser.mySym); // myKey1 // JsUser.mySy will be a string 
// console.log(JsUser[mySym]);

// how to change values
JsUser.email = 'leo@gmail.com' // this is how you can change and override the values

// if you don't want to change the values then you can lock the values
// Object.freeze(JsUser)
JsUser.email = 'leo@hotmail.com' // this will not be override as we freezed the object
// console.log(JsUser)
/*

{
  name: 'leo',
  'full name': 'Leo Vyas',
  age: 1,
  location: 'mumbai',
  email: 'leo@gmail.com',
  loggedIn: false,
  lastLoginDays: [ 'monday', 'saturday' ],
  [Symbol(key1)]: 'myKey1'
}
*/


// functions in object
JsUser.greeting = function(){
    console.log("Hello JS user!!");
    
}

// console.log(JsUser.greeting); // [Function (anonymous)] // we did not get the function instead we got a function reference
console.log(JsUser.greeting()) 
/*
Hello JS user!!
undefined
*/

// accessing the elements present in the object only
JsUser.greetingsTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greetingsTwo())


