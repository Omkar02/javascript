// Othere module will be used by ./scope.js
// to import a function

// for this to work had to add 
// "type": "module"
// in `package.json`
function helloWorld(){
    console.log("Module Says -> Hello World :)")
}

export {helloWorld}