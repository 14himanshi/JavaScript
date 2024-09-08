const user = {
    username: "himanshi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`) // when you are refering the current context then you will use this keyword
        console.log(this) // yeh current context ki value ki baat karta hai
    }
}
// user.welcomeMessage()
// user.username = "sammy"
// user.welcomeMessage()

// console.log(this) // yeha {} because hum node environment ke ander hai, and glocbal mai koi context hi nahi hai toh woh {} print kar raha hai
/*
but in the browser when you do console.log(this) , the value you get is the window object 
this is because window is the global object there
and here we will get {} because here there is no object
*/

// functions ke ander this nahi chal raha 
// function chai(){
//     let username = "himanshi"
//     console.log(this.username) // here we will get undefined for 'this.username' // but for 'this' we will get an outputk
// }
// chai()

/*
const chai = function(){
    name="leo";
    console.log(this.name)
}
*/
// or you can write it in the form of arrow function
// const chai = () => {
//     let name= "leo"
//     console.log(this) // yeha this.name pe bhi undefined aata hai // yeha pe this pe {} yeh aata hai
// }
// chai()

// this is explicit arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// this is implicit arrow function
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "himanshi"})
// console.log(addTwo(1,2))

// const arr = [2,5,1,7,4]
// can be written in all these ways
// arr.forEach(function () {})
// arr.forEach( () => {} )
// arr.forEach( () => () )  

    







