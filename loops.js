// ========== while loop ========== 
let cnt = 0
while (cnt < 10 ){
    console.log("count", cnt++)
}
console.log()

// ========== do while ========== 
// *this is only used when the content of loop 
// *must be ran atleast once

let cntOne = 0
do{
    console.log("cntOne -> ", cntOne)
    cntOne ++
}while(cntOne < 10)
console.log()

// ========== for loop ========== 
// * for loop ========== 
let arr = [10,2,3,4,5,6,7]
for (var i=0; i< arr.length; i++){
    console.log(`val at index ${i} = `, arr[i])
}
console.log()

// * for/in loop ========== 
for (let j in arr){
    console.log("val = ", arr[j])
}
console.log()

// * for loop for object ======= 
const  objOne = {"one": 1, "two": 2, "three": 3, "four": 4}
for (var key in objOne){
    console.log(`${key} -> ${objOne[key]}`)
}
objOne["eight"] = 8
console.log(objOne)
console.log()

// * nested for loop ======= 
const nArr = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
             ]
console.log("Nested Array: ")
for(let i=0; i<nArr.length; i++){
    for(let j=0; j<nArr[0].length; j++){
        console.log(nArr[i][j])
    }
}
console.log()

// *excersice
// Since the problem requires us to take the sum of population with temperature less than or 
// equal to 10°C, we only need to look at the temp and population properties of the object. 
// For each element we do the following:
//      If the element value is equal to null, ignore it.
//      If the object’s temp property is assigned a value greater than 10, ignore it.
//      Otherwise, for an object with temp property assigned to a value less than or equal 
//      to 10, add the population property value to the ans variable.
console.log("======= Excersice: Counting Population! =======")
var raw_arr = [
    [
      {name: "NewYork", population: 8623000, temp: 6.0, currency: 'USD'}, 
      {name: "Boston", population: 685094, temp: 2.0, currency: 'USD'}, 
      {name: "Los Angeles", population: 4000000, temp: 13.0, currency: 'USD'}
    ],
    [
      {name: "San Francisco", population: 884363, temp: 12.0, currency: 'USD'}, 
      null, 
      {name: "Charlottesville", population: 48019, temp: 8.0, currency: 'USD'}
    ],
    [
      null, 
      {name: "Seattle", population: 724745, temp: 4.0, currency: 'USD'}, 
      null
    ],
  ]; 

let ans = 0;
for (let x=0; x < raw_arr.length; x++){
    for (let y=0; y < raw_arr[0].length; y++){
        if(raw_arr[x][y]){
            if(raw_arr[x][y]["temp"] < 10){
                ans += raw_arr[x][y]["population"]
            }
        }
    }
}
console.log(`total population = ${ans}`)