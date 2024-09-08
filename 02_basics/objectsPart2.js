// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "something@mail.com",
    fullname: {
        userfullname: {
            firstname: "himanshi",
            lastname: "vyas"
        }
    },

}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

// we can combine objects
const a = {
    1: "A",
    2: "B",
}

const b = {
    3: "C",
    4: "D",
}

const e = {
    5: "E",
    6: "F"
}

const c = {a,b}
// console.log(c) // { a: { '1': 'A', '2': 'B' }, b: { '3': 'C', '4': 'D' } }
// const d = Object.assign(a,b,e) // { '1': 'A', '2': 'B', '3': 'C', '4': 'D' } // it can run without paranthesis as well but it is recommended to use paranthesis as it asures us that the answer will come is a object only and is the combination of the given objects
/*
const returnedTarget = Object.assign(target, source)
returnedTarget === target is true as the merged object is stored in target as well
*/ 
/*
so we use that empty {} to ensure that the target object is the empty object 
*/
// console.log(d)

const f = {...a,...b}
// console.log(f)

const users = [
    {
        id: 1,
        email: "h@mail.com"

    },
    {
        id: 1,
        email: "h@mail.com"

    },
    {
        id: 1,
        email: "h@mail.com"

    },
]

console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // the data type of the output is array
// console.log(Object.values(tinderUser)); // output is array as well
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ] // this is also array

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true




