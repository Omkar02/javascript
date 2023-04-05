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
console.log(twoOpsInOne(2)(3)(4)())
console.log(twoOpsInOne(2, 3, 4)())
console.log()