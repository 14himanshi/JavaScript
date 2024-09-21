/*

Promises: Promise is an object which represents the eventual completion (or failure) of an asynchronous operation and it's resulting value
Promise ka matlab yeh hai ki, aapne jo usko task diya hai woh woh task ko queue mai laga deta hai (and woh tabhi ke tabhi complete nahi hota) but woh jab uska chance aata hai queue mai tabhi complete hota hai. yeh mota mota yeh hi hai ki, yeh ek promise hai ki yeh task badmai hoga(kab hoga woh nahi pata), ho ga ya bhi nahi woh nahi pata, but yeh queue mai daalta hai woh task ko
yeh operations konse hai? 
(accessing file, request to databases, cryptography etc yeh sabmai asynchronous programming hota hai ismai async await lagate hai ya promises use karte hai, yeh sabmai zyada time lagta hai)

promises ke three state hote hai:
- pending: initial state, neither fulfilled nor rejected.
- fulfilled: meaning that the operation was completed successfully.
- rejected: meaning that the operation failed

*/

// promises banate bhi hai but mostly hum promises ko consume hi karte hai

// this is how we create a promise
// here we made a new instance of the promise object
// earlier Q or BlueBird libraries were used for functions that are in promises. And these were very popular among different developers so they were integrated in javascript only by default in shape of promises

// Now we don't need libraries like Q or BlueBird

// promises takes in a callback
// the callback function takes two parameters resolve and reject
// Promise one
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task in this
    // async tasks are: DB calls, crypotography, network call
    setTimeout(function(){
        console.log('Async task is Complete')
        resolve() // this is the connection between .then and resolve, iske baad hi promise consume hota hai
    }, 1000)
})

// how do we consume a promise
// .then() is directly connected to resolve; .then() ke ander ek callback function milta hai, and yeh function automatically ek parameter le leta hai, ab yeh parameter kya karta hai ki jo uppar kaam hua hai usse jo return hota hai woh hi issmai parameter aata hai
promiseOne.then(function(){
    console.log("Promise Consumed");
})

// Promise two
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    } ,1000)
}).then(function(){
    console.log("Promise two consumed")
})

// Promise three
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email:"chai@example.com"}) // resolve mai mostly object hi pass hota hai
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user); // { username: 'Chai', email: 'chai@example.com' }
})

// Promise four
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "himanshi", password: "123"})
        } else {
            reject("ERROR: Something went wrong")
        }
        
    }, 1000)

})

// this is called cahining
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then( (username) => {
    console.log(username);
})
.catch( (error) => {
    console.log(error);
})
.finally(function(){
    console.log("Promise is resolved or Rejected")
})


// promise five
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "123"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})
// handling promises using async await

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()


// promise six
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') // an object
//         const data = await response.json()
//         console.log(data)
//     } catch(error){
//         console.log("E: ", error); 
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then( (response) => {
    return response.json()
}) 
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})

// FETCH





