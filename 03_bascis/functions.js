function sayMyName(){
    console.log("Himasnhi");
    
}
sayMyName // this is function reference, saying ki function kaha rehta hai
// sayMyName() // this is calling the function

// function sum(num1, num2){ // here num1, num2 are parameters
//     console.log(num1+num2)
// }

// sum(1,2) // here 1, 2 are arguments
// sum("3",2) // 32
// sum(3,"2") // 32
// sum(3,"a") // 3a
// sum(3, null) // 3

// const result = sum(3,5)
// console.log(result); // undefined

function sum(num1, num2){ // here num1, num2 are parameters
    return (num1+num2)
}

const result = sum(3,5)
// console.log(result);

function logInUserMessage(username = "sammy"){
    return `${username} just logged in`
}

// console.log(logInUserMessage("himanshi"))
// console.log(logInUserMessage()); // undefined just logged in  

function calculateCartPrice(...num1){ // rest operate, it bundles up the given input
    return  num1 
}

// console.log(calculateCartPrice(200,400,500));

const user = {
    name: "himanshi",
    price: 199
}

function handleObject(obj){
    console.log(`Username is ${obj.username} and price is ${obj.price}`)
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 300
// })

const newArr = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(newArr))
// console.log(returnSecondValue([1,2,3,4]));

//***************************** Global and Local Scope *****************************************************

let a = 10 // this is scope variable
const b = 20 // this is scope variable
var c = 30 // var is not a scopr variable

{} // yeh curly braces ko hi scope bolte hai 
   // yeh jab if-else, function , switch ke sath aata hai toh woh scope ho jata hai

// console.log(a);
// console.log(b);
// console.log(c);

// node mai and browser pe global scope different hota hai

function one(){
    const username = "himanshi"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    two()
    // console.log(website)
}

// one()

// if (true){
//     const user="leo"
//     if(user==="leo"){
//         const website = "youtube"
//         console.log(user + website);
        
//     }
//     console.log(user)
// }

// ******************************* interesting *******************************************************

addOne(5) // here no error will come
function addOne(num)
{
    return num + 1
}


addTwo(5) // here error will come 
// isko expression bolte hai, asse bhi functions bana sakte hai
const addTwo = function(num) {
    return num + 2
}







