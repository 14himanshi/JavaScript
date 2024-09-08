// Immediately Invoked Function Expressions (IIFE)

/*
we use iife cause :
1) allows you to execute a function as soon as it is defined
2) In JavaScript, variables declared outside of a function are added to the global scope, which can lead to conflicts, especially in large programs or when combining multiple scripts.
An IIFE creates a new function scope, so variables inside the IIFE are not accessible from the global scope, preventing naming collisions.
*/

// this is a named iife with the name chai
(function chai(name){
    console.log(`DB CONNECTED ${name}`)
})("leo");

// two consecutive iifes can be written with a semi-colon seperating them

// this is an un-named iife
( () => {
    console.log(`DB CONNECTED TWO`)
} )()

