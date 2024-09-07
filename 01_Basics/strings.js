// can be denoted with single as well as single quotes
    // const name ='himanshi'
    // const repoNum = 23

//console.log(typeof(name+repoNum)); // string
// this is not at all a good way of concatinating strings

    // console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoNum}`)
    // console.log(`${name}${repoNum}`)

// const gameName = new String('himanshi-dv') // this is other way of declaring string
    // console.log(gameName) // string will be an object here when we declare it using 'new' keyword
    // console.log(gameName[0])
    // console.log(gameName.__proto__)
    // console.log(gameName.length); // this length method(or function) is in the prototype 
    // console.log(gameName.toUpperCase()); // here the original string is not changed , cause string will be stored in stack 
    // console.log(gameName.charAt(2));
    // console.log(gameName.indexOf('i'))
    // const str = gameName.substring(-1,4) // if u give neg values still it will start from 0
    // console.log(str)

    // const str1 = gameName.slice(-8,6)
    // console.log(str1)

    // const str2 = "        himanh.  vyas.   "
    // console.log(str2.trim())

    // const url = "https://himanshi.com/himanshi@34vyas"

    // console.log(url.replace('@34','-'))
    // console.log(url.includes('sun'))
    // console.log(gameName.split('-'))