/*

Javascript's default behaviour is prototypal in nature
prototype behavious ke wajah se hi hume 'new' 'this' keywords use case mila and classes ka use case mila

Imagine the prototype chain in JavaScript as a family tree, where properties and methods (functions) are inherited from one "ancestor" to the next. If an object doesn’t have a certain property, JavaScript looks to the object’s parent (or prototype) and continues searching up the chain until it either finds the property or runs out of objects to look through.

Real-World Example: Family Tree
Let’s say you have a family with Grandparent, Parent, and Child. They share some common behaviors, like "walking," but some members of the family have unique behaviors, like "driving" or "coding."

Grandparent: Can walk.
Parent: Can walk, and also drive.
Child: Can walk, drive, and also code.

In JavaScript:
The Child object looks for the ability to code. Since the child knows how to code, it doesn't need to look any further.
The Child object looks for the ability to drive. If the child can’t drive, it looks at the Parent object for that ability.
The Child object looks for the ability to walk. If it can't find it on the Child or Parent object, it checks Grandparent.

*/

/*

JS mai haar cheeze object hai

Is function also object?
yes, function is function as well and object as well. you can make it behave as object as well

*/

function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype) // yeh function ka this hai

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)

chai.printMe()
tea.printMe()
// this will give error; properties toh aaye hai, but function ko kon bataega ki new properties add hua hai, yeh 'new' keyword bataega

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
