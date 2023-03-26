// Global Scope
var globalOne = 10;
function firstFunc(){
    console.log({globalOne});
}
firstFunc()
console.log()
// Local Scope
    // 1. Function Scope

var globalTwo = 10;
function secondFunc(){
    var funcScopeOne = 20;
    console.log({globalTwo, funcScopeOne})
}
secondFunc()
console.log({globalTwo}); // cannot access funcScopeOne here
console.log()

    // 2. Block Scope

var globalThree = 30;
if (1){
    let blockScopeOne = 40;
    console.log({globalThree, blockScopeOne})
}
console.log({globalThree}) // cannot access blockScopeOne here
console.log()

// Lexical Scope
// * this says in a function child has access to all parent var
// * but not true vice-versa

function thirdFunc(){
    var funcVarOne = 10;
    let blockScopeTwo = 20;
    
    function thirdFuncInner(){
        console.log({funcVarOne, blockScopeTwo})
    }

    return thirdFuncInner()
}

thirdFunc()
console.log()


// Module Scope
import { helloWorld } from "./scopeOther.js";
helloWorld()