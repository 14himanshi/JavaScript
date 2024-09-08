// arrays

// const myArrays = [0,1,2,3,4,5,true,leo]
const a = [0,1,2,3,4,5] 
// array is an object, that can store a mix of different data types in it
// they are resizeable . they can not be accessed using arbitrary strings as indexes, but must be accessed using non-negative integers
// they copy operation on arrays form shallow copies (all standard built-in operations with any javaScript objects create shallow copies rather than deep copies)

// shallow copies: a shallow copy of an object is a copy whose properties share the smae reference(point to the same underlying value) as those of the source object from which the copy was made.

// deep copies: a deep copy of an object is a copy whose properties do not share the same refernce (point to the same underlying values) as those of the source object from which the copy was made. 
//              means, when you change the source or the copy, you can be assured that you are not changing the source or the copy object to change too.

const b = new Array(0,1,2,3,4,5)
// console.log(typeof a) // object
// console.log(typeof b) // object

// agar hum console pe array declare karte hai toh usmai array items, length, and prototype karke stored hota hai object mai; and uss prototype mai ek aur prototype hota hai


// Array Methods
a.push(6)
a.push(7)
// console.log(a); // [0,1,2,3,4,5,6,7]
a.pop()
// console.log(a); // [0,1,2,3,4,5,6]

a.unshift(12) // adds element in the begining
// console.log(a); // [12,0,1,2,3,4,5,6]
// the operation is a little useless cause it will require a lot of operations, as all the elements needs to be shifted for adding one element in the beginning. Same goes for the shift operation, a lot of computation is required to remove an element from the begining

a.shift() // remove element from the beginning
// console.log(a); // [0,1,2,3,4,5,6]

a.unshift(33)

// these are some questions we ask and we get answer in true or false
// console.log(a.includes(55)); // false as 55 is not present in the array
// console.log(a.indexOf(5)); // 6. it gives that where the number 5 is stored
// console.log(a.indexOf(100)) // -1, as 100 is not in the array

const c = a.join() // 
// console.log(a)
// console.log(c, typeof c); // it has binded our array as well as converted it to a string(comma seperated) //33,0,1,2,3,4,5,6

// slice and splice operations
// slice 
// console.log("A: ",a)
// const d = a.slice(1,3)
// console.log("A after slice: ",d) // [0,1]
// console.log("B: ",a); // [33,0,1,2,3,4,5,6]

// const e = a.splice(1,3)
// console.log("A after splice: ",e) // [0,1,2]
// console.log("C: ",a); // [33,3,4,5,6]

// difference between slice and slpice:
/*
1) Here if we want to slice from (1,3) then it will not include index3 element in slice but in splice it will include element at the index 3
2) the splice operation manipulates the original array, whereas the slice operation does not 
*/

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"] 

// marvel_heros.push(dc_heros) // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ], this happened cause array koi bhi data le leta hai , toh ismai isne array bhi input le liya  
// console.log(marvel_heros)
// console.log(marvel_heros[3][1]); // flash ; but this is not a nice syntax to print flash if you waant to

// const allHeros = marvel_heros.concat(dc_heros) // concat operation will always return a new array 
// console.log(allHeros) // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(marvel_heros) // ["thor", "ironman", "spiderman"]
 
const allNewHeros = [...marvel_heros, ...dc_heros];
// console.log(allNewHeros) // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ] 
// you can use concat also but most people use this spread operation only

// const f = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5, [8]]]]
// const g = f.flat(1) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5, [8] ] ]
// const h = f.flat(2) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5, [8] ]
// const i = f.flat(3) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5, 8 ]
// const j = f.flat(Infinity) // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5, 8 ] // this is not recommende we should always give exact depth only
// console.log(g)
// console.log(h);
// console.log(i);
// console.log(j)

// console.log(Array.isArray("himanshi")) // we are asking a question here, whether 'himanshi' is an array or not
// console.log(Array.isArray(a))

console.log(Array.from("Himanhsi")) // ['H', 'i', 'm', 'a', 'n', 's', 'h' ,'i'] // yeh 'himanshi' ko array mai transform kardega, jo bhi ismai daalo woh array mai transform kardega
console.log(Array.from('Himanhsi,1,2,3,false')) // ['H', 'i', 'm', 'a', 'n','h', 's', 'i', ',', '1',',', '2', ',', '3', ',','f', 'a', 'l', 's', 'e']
console.log(Array.from({name:"leo"})) // [] // as we have not specified from what we have to make array (keys? or values?) so it will return empty array as we have not mentioned anything

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // this will also return a new array from a set of elements // [100, 200 ,300]

/*
Typed arrays in JavaScript are a collection of array-like objects that allow you to work with binary data directly. They provide a way to handle raw binary data with a specific data type and fixed length, which is especially useful for performance-critical applications like graphics rendering, audio processing, and handling binary network protocols.

Key Features of Typed Arrays:
    Fixed Length: Once created, a typed array's length cannot change. This is different from regular JavaScript arrays, which can dynamically grow or shrink.
    Typed Data: Each typed array represents a specific kind of binary data (e.g., 8-bit unsigned integers, 32-bit floating-point numbers, etc.). This allows for more efficient memory usage and better control over the data format.
    ArrayBuffer: Typed arrays are built on top of an ArrayBuffer, which is a generic, fixed-length buffer for binary data. The ArrayBuffer provides the raw binary data, and typed arrays are "views" on top of this buffer that interpret the data in a specific format.
    Binary Data Manipulation: Typed arrays are often used in scenarios where you need to work with binary data, such as in WebGL, Web Audio API, file processing, or when interacting with binary protocols or hardware devices.

*/

/*
console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray('[]'));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false

*/

/*
console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]
*/