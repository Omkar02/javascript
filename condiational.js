console.log("Practicing the condiational Statement in JavaScript!")
console.log()


// Example 1
let varOne = 0
if (varOne){
    console.log(`varOne is = ${varOne}`)
}
else{
    console.log(`varOne is = ${varOne}`)
}

// Example 2
let varTwo = -21
if (varTwo < 0) {
    varTwo *= -1
} 
console.log(`varTwo = ${varTwo}`)


console.log("\n----- Ternary Operators -----\n")
// Example 3
let varThree = "hello"
varThree == "hello"? console.log(`it's ${varThree}`) : console.log(`not ${varThree}`)


// Example 4
let varFour = -10

outVar = varFour < 0? varFour *= -1 
        : varFour > 0 ? varFour += 11
        : varFour === 0? varFour += 100 
        : varFour
console.log(`The varfour = ${varFour}`)