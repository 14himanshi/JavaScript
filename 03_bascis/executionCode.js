// javaScript Execution context

/*

we will refer this code for the below given comment block:

1   let val1 = 10
2   let val2 = 5
3   function addNum(num1, num2){
4       let total = num1 + num2
5       return total
6   }
7   let result = addNum(val1, val2)
8   let result2 = addNum(10,2)    

*/

/*

javascript runs your code in two phases

1) memory creation phase (or creation phase): sab variables and function ke liye memory allocate hota hai but execute nahi hota hai
example: 
 
2) execution phase: 

*/ 

/*
1) sabse pehle humare pass aaega global execution context aur yeh this ke ander allocate kar diya jata hai
    global execution context -> this

2) memory phase start hoga: saare variable ko collect karke memory mai allocate karenge
    1   val1 -> undefined
    2   val2 -> undefined
    3   addNum -> function defination (matlab pura function mai kya ho raha woh chala jata hai ismai)
    7   result1 -> undefined
    8   result2 -> undefined

3) execution phase start hoga
    1   val1 <- 10
    2   val2 <- 5
    7   result1 <- addNum
        addNum ->  ( yeha pe aapke liye banega ek ( new variable environment + new execution thred ) new executional context banege ) ( toh abhi jo bhi steps the woh phirse hoga , yeh jitne baar functionn likenge woh utne baar hota hai )  -> 1) memory phase:          2) execution phase
                                                                                                                                                                                                                                                    num1 -> undefined         num1 -> 10
                                                                                                                                                                                                                                                    num2 -> undefined         num2 -> 5       
                                                                                                                                                                                                                                                    total -> undefined        total -> 15                
        it will return the value in global execution context of the code
        after the work of the local exececutional context is done it will be deleted
        result <- 15                                                                                                                                                                                                                                                                         return -> total -> 15               
    8   result2 -> addNum                                                                                                                                                                                                                                                   
        addNum -> (new variable environment + new execution thread banega) 1) memory phase         2) execution phase                                                                                                                                                                                                                                     
                                                                              num1 -> undefined       num1 -> 10                                                                                                                                                               
                                                                              num2 -> undefined       num2 -> 2                                                                                                                                                               
                                                                              total -> undefined      total -> 12                                                                                                                                                                
        result2 -> 12  abhi yeh gloabl execution unit mai chala jaaega                                                                                            result2 -> 12                                                                                                                                                                         
*/

/*
Call Stack in javascript:
    1) Global execution context (yeh sabse pehle hota hai call stack mai)
    2) Jo function call hua hai that will be stored in the stack and as soon as the function is completed it will be taken out of the stack
    3) Abhi jo function ke ander function hota hai woh kese work karta hai : outer func pehle stack mai jaaega fir inner func jab call hoga woh bhi stack mai add ho jaaega , fir jab inner func khatam hoga toh nikal jaaega stack mai se (and sirf outer func reh jaaega stack mai) fir jab outer func khatam hoga woh bhi nikal jaaega stack mai se ; here LIFO concept will work
*/

/*

    global execution context will be created as soon as you give your code to javascript
    as soon as the global execution context is made it is stored in the keyword "this"
    Now, the global EC of browser, node, bun,deno is very different
    browser -> this is window object
    javascript is single threded
    We also have function execution context 
    some documentation also say we also get eval execution context (yeh gloabl object hi hota hai)

*/