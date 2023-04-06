// ----- curry function -----
// * The concept of curry functions involves functions that 
// * take one argument and return a new function, which also 
// * takes one argument.

function addTwo(a){
    function _innerOne(b){
        return a + b
    }
    return _innerOne
}

let twoVarOne = addTwo(2)
console.log('twoVarOne = ', twoVarOne)
let twoVarTwo = twoVarOne(5)
console.log('twoVarTwo = ', twoVarTwo)
console.log()

// ----- curry function more than two val -----

function addThree(a){
    function _innerOne(b){
        function _innerTwo(c){
            return a + b + c
        }
        return _innerTwo
    }
    return _innerOne
}

let threeVarOne = addThree(5)(6)(3)
console.log(`threeVarOne = ${threeVarOne}`)

// ----- infinite curry -----

function infAdd(a){
    function _innerOne(b){
        if (b){
            return infAdd(a + b)
        }
        else{
            return a
        }
    }
    return _innerOne
}

let infVarOne = infAdd(4)(3)(3)(2)()
console.log(`infVarOne = ${infVarOne}`)
console.log()

// !----- add(2)(3)(4) and add(2,3,4) usage in same function -----

function twoOpsInOne(...args){
    let tempSum = args.reduce((cur, prev) => {return cur + prev})
    function _innerOne(...argsInner){
        if (argsInner.length === 0){
            return tempSum

        } else {
            tempSum += argsInner.reduce((cur, prev) => {return cur + prev})
            return _innerOne
        }
    }
    return _innerOne
}
console.log(' ----- add(2)(3)(4) and add(2,3,4) usage in same function ----- ')
console.log("add(2)(3)(4) = " ,twoOpsInOne(2)(3)(4)())
console.log("add(2,3,4)   = ", twoOpsInOne(2, 3, 4)())
console.log()

// ----- function Composition -----

let square = x => x * x
let double = x => x * 2

console.log('Composition Function = ', double(square(2)))
console.log()

// ----- other way for composition -----

// * the below technique is called arrow func chaining
let compose = (f, g) => x => f(g(x))

let addFour = x => x + 4
let addFive = x => x + 5

console.log('Other Composition Function = ',compose(addFour, addFive)(1))


// ----- Compose reduceright a.k.a infinite function ------

// * The reduceRight method takes a function, invokes
// * it with x argument, and then continues it with the
// * rest of the functions in the list; the next function
// * receives the result of the first output and so on.
let reduceRightCompose = (...func) => x => func.reduceRight((y, f) => f(y), x)

let addSix = x => x * 2
let addSeven = x => x * x
//!                                 <---- direction of exec ----------
console.log('ReduceRight = ', reduceRightCompose(addSix, addSeven)(2))

// ----- Compose reduce the chages the direction of exec -----

// ! Syntax
// ! reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any
let reduceCompose = (...func) => x => func.reduce((y, f) => f(y), x)
//!                      ---- direction of exec ---------->
console.log('Reduce = ', reduceCompose(addSix, addSeven)(2))
console.log()

// ----- reccursion -----

function addtoN(n){
    if (n == 1 || n == 0){
        return n
    }
    return addtoN(n-1) + n
}
console.log('Reccurssion\n\t1. addtoN = ', addtoN(5))

function maxofArr(arr){
    if (!arr){
        return -1
    } else if (arr.length === 1) {
        return arr[0]
    }

    let maxSubArr = maxofArr(arr.slice(1))
    if (arr[0] > maxSubArr){
        return arr[0]
    } else {
        return maxSubArr
    }
}

console.log('\t2. maxofArr = ', maxofArr([10,2,1,-3,4]))

function calPower(base, pow){
    if (!pow){
        return 0
    } else if (pow === 1) {
        return base
    }
    return base * calPower(base, pow - 1)
}

console.log('\t3. calPower = ', calPower(2, 3))