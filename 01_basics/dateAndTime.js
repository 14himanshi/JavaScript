// Dates And Time

// let myDate = new Date()
// console.log(myDate) // 2024-09-07T07:18:36.145Z
// console.log(myDate.toString()) // Sat Sep 07 2024 07:19:18 GMT+0000 (Coordinated Universal Time
// console.log(myDate.toDateString()) // Sat Sep 07 2024
// console.log(myDate.toISOString()) // 2024-09-07T07:24:40.931Z

// console.log(myDate.toJSON()); // 2024-09-07T07:25:37.409Z
// Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization.

// console.log(myDate.toLocaleDateString()) // 9/7/2024
// console.log(myDate.toLocaleString()) // 9/7/2024, 7:27:38 AM

//  console.log(typeof myDate) // object

// const myCreatedDate = new Date(2024, 2, 14)
// console.log(myCreatedDate) // 2024-03-14T00:00:00.000Z
// console.log(myCreatedDate.toLocaleString()); // 3/14/2024, 12:00:00 AM // month mai maine 2 dala tha but answer mai 3 aaya hai // months 0 se start hote hai javascript mai

// const date1 = new Date(2024, 1, 14, 5, 3) // 2/14/2024, 12:00:00 AM
// const date1 = new Date("02-14-2024") // 2/14/2024, 12:00:00 AM
// console.log(date1.toLocaleString())

// let timeStamp = Date.now()
// console.log(timeStamp); // 1725695067608 , yeh 1st jan 1970 se abhi tak ka time in mili seconds hai
    
// console.log(date1.getTime());
// console.log(Math.floor(Date.now()/1000)) // this is time in seconds

// let date = new Date()
// console.log(date) // 2024-09-07T07:55:01.922Z
// console.log(date.getMonth() + 1) // 9
// console.log(date.getDay() + 1) // 7

// console.log(`${date.getDay() + 1}th of the month ${date.getMonth() + 1} of the year ${date.getFullYear()} and the time ${date.getTimezoneOffset()}`)

// date.toLocaleString('default', {
//     weekday: "long",
// })
