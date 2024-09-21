// objects in js are only object literals 
/*

Summary:
Object literals in JavaScript are a convenient and direct way to define objects using curly braces {}, allowing you to create objects without needing to define a class or constructor function. They are often used in OOP for simpler object creation, though JavaScript also supports more formal OOP structures like classes.

Key Points:
- Object literals are created using curly braces {}.
- They allow you to define both properties and methods directly.
- No need to define a class or constructor function.
- Used for simpler tasks in OOP, but can be combined with classes for more complex patterns.

*/

const user = {
    username: "himanshi",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log('Got user details from database');
        // console.log(`Username: ${this.username}`)
        console.log(this); // the entire object will be printed in this step
    }

}

// console.log(user.username)
// console.log(user.getUserDetails())
// this keyword jab bhi use karte hai toh hum current context ke baare mai baat karte hai
// console.log(this) // empty paranthese {} ;this global context keep changing in browser

// constructor functions
// const promiseOne = new Promise()
// const date = new Date()

// the new keyword given above is a constructor function
// yeh sirf aapko allow karta hai ki aap ek hi object literal se multiple instances of object bana sake aap
// this 'new' keyword and constructor functions helps us to form new contexts

function User(username, loginCount, isLoggedIn){
    this.username = username; // right wala parameter hai that we are passing in the function and left wala function ke ander ka variable hai
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this // this will return the entire object
}

// const user1 = User('himanshi',12,true)
// const user2 = User('vyas',11,false)
// console.log(user1) // user2 will override the content of user1
/*

The issue in your code is that you are not using the new keyword when creating instances of the User object. In JavaScript, when you define a constructor function like User, you need to create new instances with new User() to ensure that a new object is created for each instance.

Without the new keyword, the this inside the function refers to the global object (or undefined in strict mode) rather than a new instance of the User object. As a result, user1 and user2 don't actually hold different instances of User. Instead, the properties are assigned to the global object, and when you create user2, it overrides the values set by user1.

*/ 

/*

Regular functions VS Constructor Functions
- Purpose: Regular functions perform specific tasks, while constructor functions create object instances.
- Invocation: Regular functions are called directly (myFunction()), constructor functions are called with new (new MyConstructor()).
- this Binding: In regular functions, this refers to the global object (or undefined), while in constructor functions, this refers to the new object (instance).
- Return Value: Regular functions explicitly return a value or undefined, constructor functions implicitly return the new object.
- Capitalization Convention: Regular functions follow camelCase, while constructor functions use PascalCase.
- Use Case: Regular functions are for task-based operations, constructor functions are for object creation.

*/

// to avoid overriding we will put the new keyword

const user1 = new User('himanshi',12,true)
const user2 = new User('vyas',11,false)
// console.log(user1);
// console.log(user2);
// User { username: 'himanshi', loginCount: 12, isLoggedIn: true }
// User { username: 'vyas', loginCount: 11, isLoggedIn: false }

// Agar User function mai return this bhi nahi likhe toh bhi yeh output aaega, implicitly hi yeh object milta hai hume

/*

steps that happen when 'new' keyword is used:
1) It creates a empty object which is called instance
2) Ek construtor function call hota hai new keyword ke karan (yeh kya karta hai jitne bhi arguments hai woh ismai pack karke aapko de deta hai)
3) jo bhi arguments and all hai woh instanc emai inject ho jata hai

*/


// console.log(user1.constructor); // [Function: User]
// yeh constructor property kya hai? yeh khudke baare mai hi reference hota hai

console.log(user1 instanceof User) // true
console.log(user1 instanceof Object) // true
