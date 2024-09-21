let myName = "Himanshi         "

// console.log(myName.length)
// console.log(myName.trim().length);


let myHeros = ["thor", "superman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.himanshi = function(){
    console.log('himanshi is present in all objects');
}

// heroPower.himanshi()
// myHeros.himanshi()

Array.prototype.heyHimanshi = function(){
    console.log('Himanshi says hello');   
}

// heroPower.heyHimanshi() // error will come here
// myHeros.heyHimanshi() // himanshi says hello will be printed here

// Prototypal Inheritence

const user = {
    name: "chai",
    email: "chai@example.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const taSupport = {
    makeAssignment: 'JS Assignments',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__ = user

// morden syntax

// under the hood woh __proto__ hi chal raha hai
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUserName = "VyasHimanshi      "
String.prototype.trueLength = function(){
    console.log(`${this}`) // jisne bulaya woh hi print hoga
    console.log(`True Length is ${this.trim().length}`);
}

anotherUserName.trueLength() // this mai VyasHimanshi print hoga
"Himanshi       ".trueLength() // this mai Himanshi print hoga
"iceTea".trueLength() // this mai iceTea print hoga
