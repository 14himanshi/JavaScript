// Primitives (7 types)

/*
7 types: String, Number(deciaml or int), Boolean, Null(this is basically empty, not zero), Undefined, Symbol and BigInt
*/

// Non-Primitive

/*
Arrays, Objects (most important thing) and Functions
*/

// JavaScript is a dynamically typed language, but TypeScript is a statically typed language.
//  In dynamically typed languages all type checks are performed in a runtime, only when your program is executing. So this means you can just assign anything you want to the variable and it will work

const id = Symbol('123')
const anotherId = Symbol('123')
// symbol makes both these values unique even if they have the same input '123'.

console.log(id === anotherId) // this will come out to be false

const bigNum = 3648264352846826846238n

const heros = ['shaktiman', 'naagraj', 'doga']

let obj = {
    name: 'himanshi',
    age: 21,
}

const fun = function(){
    console.log("Hello World")
} 

const fun1 = () => {

}

/*
    type => typeof(return value) => object wrapper
    null => object => N/A
    undefined => undefined => N/A
    boolean => boolean => boolean
    number => number => number
    bigInt => bigint => bigint
    string => string => string
    symbol => symbol => symbol
*/
