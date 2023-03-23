// ------- Simple Function -------
function sum(a, b){
    total = a + b
    console.log(`Sum of ${a} + ${b} = ${total}`)
    return total
}
sum(4, 6)
let tmp = sum
tmp(5, 16)
console.log()

// ------- Nested Function -------

function calculate(valOne, valTwo, operation){
    function display(total){
        console.log(`${valOne} ${operation} ${valTwo} = ${total}`)
    }
    let total = 0
    if(operation === "+"){
        total = valOne + valTwo
        display(total)
    }
    else if(operation === "-"){
        total = valOne - valTwo
        display(total)
    }
}

calculate(1, 2, "+")
calculate(1, 2, "-")
console.log()

// ------- Arrow Function -------

let func = (a, op, b) => { 
    let total = op === "+"?a+b:a-b
    console.log(`${a} ${op} ${b} = ${total}`);
    return total
}

func(1, '+', 2)
func(1, '-', 2)
console.log()

// ------- Arrow Function Single args -------

let square = a => a**2
// * Arrow functions with only one argument 
// * can be made cleaner by dropping the parentheses around the arguments

val = 5
console.log(`square of ${val} = ${square(val)}`)
console.log()

// ------- Arrow Function No args -------

let display = () => console.log("No args!")
display()
console.log()

// ------- Arrow Function Return Object -------

let objOne = () => {return {"hello": "world"}}
console.log(objOne(), objOne()["hello"])
console.log()

// ------- Function As Args-------

let addFunc = (a, b) => {return a + b}
let subFunc = (a, b) => {return a - b}
let divFunc = (a, b) => {return a / b}
let mulFunc = (a, b) => {return a * b}


function funcCal(a, b, func){
    console.log(`${a} ${func.name} ${b} = ${func(a, b)}`)
}
let toCalOne = 2
let toCalTwo = 3
funcCal(toCalOne, toCalTwo, addFunc)
funcCal(toCalOne, toCalTwo, subFunc)
funcCal(toCalOne, toCalTwo, divFunc)
funcCal(toCalOne, toCalTwo, mulFunc)
console.log()

// ------- Array Methods -------

let arrTest = [1, 2, 3, 4, 6]
// * syntax = function callbackfn(value: any, index: number, array: any[])
function showArgs(val, idx, arr){
    console.log(`val = ${val}, idx = ${idx}, arr = [${arr}]`)
}
arrTest.forEach(showArgs)
console.log()

// * _ is use to skip val same a python
function addFive(_, idx){
    arrTest[idx] += 5
}
arrTest.forEach(addFive)
console.log(arrTest)
console.log()

// Map And Reduced Method

let someArr = ["1", NaN, true, 0, "1"]
let countSomeArr = someArr.map(ele => {return typeof ele == 'string' ? 1 : 0})
console.log(countSomeArr)
let totalCountSomeArr =  countSomeArr.reduce((prev, cur) => {return prev + cur})
console.log(totalCountSomeArr)