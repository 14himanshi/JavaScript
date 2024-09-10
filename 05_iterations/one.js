// for of

// [" ", " ", " "] // strings in arrays
// [{}, {}, {}] // objects in arrays

// const a = [1,2,3,4,5]
// for (const num of a) {
//     console.log(num);
// } 

// const greetings = "Hello World"
// for (const greet of greetings){
//     console.log(greet) // here even the space will be printed as whitspace is also considered as a character
// }

// Maps: it is an object that holds key,value pair, duplicates are not stored in map and the order in which you store elements in the map stays that way only till the end
// maps also stroe unique values
const map = new Map() // Map is itself an object in javaSCript
map.set('IN', 'India')
map.set('UN', 'United States of America')
map.set('Fr', 'France')
map.set('IN', 'India')

// console.log(map)
/*

Map(3) {
  'IN' => 'India',
  'UN' => 'United States of America',
  'Fr' => 'France'
}

*/

// for(const key of map){
//     console.log(key)
// }
/*
[ 'IN', 'India' ]
[ 'UN', 'United States of America' ]
[ 'Fr', 'France' ]
*/

// for(const [key, value] of map){
//     console.log(key,': ',value)
// }
/*
IN :  India
UN :  United States of America
Fr :  France
*/

// const obj = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for(const [key, value] of obj){
//     console.log(key,': ',value)
// }
/* we will get an error that objects are not iterable */
// object is iterable but we can't iterate it in this way

// for each loop
const obj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

// for(const key in obj){
//     console.log(key)
// }
/*
js
cpp
rb
swift
*/

// for(const key in obj){
//     console.log(obj[key])
// }
/*
javascript
C++
ruby
swift by apple
*/

// for(const key in obj){
//     console.log(`${key} is shortcut for ${obj[key]}`)
// }
/*
js is shortcut for javascript
cpp is shortcut for C++
rb is shortcut for ruby
swift is shortcut for swift by apple
*/

const programming = ["js", "rb", "py", "java", "cpp"]
// for(const key in programming){
//     console.log(key);
// }
/*
0
1
2
3
4
*/

// for(const key in programming){
//     console.log(programming[key]);
// }
/*
js
rb
py
java
cpp
*/

// for(const key in programming){
//     console.log(`${programming[key]} is at index ${key}`);
// }
/*
js is at index 0
rb is at index 1
py is at index 2
java is at index 3
cpp is at index 4
*/

// for(const key in map){
//     console.log(key);
// }    
// we will get no result in this, as map is not iterable

// for each loop
const coding = ['js', 'ruby', 'java', 'python', 'cpp']






