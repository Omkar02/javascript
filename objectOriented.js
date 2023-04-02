// ---- prototype this involves using __proto__ keyword ----

let vehical = { wheel: 4}
let car = { seat: 5 }
let driver = { name: "Abc K"}

car.__proto__ = vehical  // associating car to vehical

console.log('car.vehical.wheel = ', car.wheel)
console.log('vehical.__proto__ = ', vehical.__proto__)
console.log('car.__proto__ = ', car.__proto__)
console.log()

// ----- constructor function -----

function Employee(_name, _age, _salary){
    this.name = _name
    this.age = _age
    this.salary = _salary

    this.update_salary = newSalary => {
        console.log(`Upadated the Salary ${this.salary} -> ${newSalary}`)
        this.salary = newSalary
    }

    this.display = () => {
        console.log(`Name = ${this.name} Age = ${this.age} Salary = ${this.salary}`)
    }
}

Employee.planet = "Earth"

let e1 = new Employee("Abc", 22, 5000)
e1.compony = "Not Amazon"
let e2 = new Employee("Xyz", 34, 10000)


e1.display()
console.log(`The Planet = ${e1.planet}`) // this does not print val
console.log(`THe COmpany = ${e1.compony}`) // prints "Not Amazon"
e2.display()
console.log()


// ----- class constructor -----
class Worker{
    constructor(_name, _age, _salary){
        this.name = _name
        this.age = _age
        this.salary = _salary

        this.compony = "Not GOOGLE!"
        
        this.changeSalary = newSalary => {
            console.log(`updating old salary ${this.salary} ` +
                `to ${newSalary} for emp -> ${this.name}`)
        }
    }

    printSalary(){
        console.log(`the Salary for `+
            `worker ${this.name} = ${this.salary}`)
    }
}

let w1 = new Worker("Alex", 23, 2000)
let w2 = new Worker("Beta", 33, 5000)

w2.printSalary()
w2.changeSalary(4000)
w2.printSalary()
console.log()

// ----- static class method -----
class Car{
    constructor(_brand, _millage, _top_speed){
        this.brand = _brand
        this.millage = _millage
        this.topSpeed = _top_speed
    }

    increaseSpeed(new_top_speed){
        console.log(`Changed top_speed to `+
            `${this.topSpeed} -> ${new_top_speed}`)
        this.topSpeed = new_top_speed
    }

    static compareTopSpeed(carOne, carTwo){
        let difference = carOne.topSpeed - carTwo.topSpeed
        console.log(`the difference in top speed of `+
            `${carOne.brand} - ${carTwo.brand} = ${difference}`)
    }
}

let car1 = new Car("Audi", "20Km/1L", 400)
let car2 = new Car("BMW", "100Km/1L", 600)

Car.compareTopSpeed(car1, car2) // calling static method
car1.increaseSpeed(800)
Car.compareTopSpeed(car1, car2)
console.log()


// ----- hiding properties in class -----
class Vault{
    constructor(_name, __username, __password){
        this.name = _name
        var __username = __username
        var __password = __password

        this.setUsername = newUserName => {
            console.log(`Updating UserName of ${this.name}`)
            __username = newUserName
        }

        this.getUserName = () => { return __username}

        this.setPassword = newPassword => {
            console.log(`Updating Password of ${this.name}`)
            __password = newPassword
        }

        this.getPassword = () => { return __password}
    }

    displayData(){
        console.log("----- Private Data -----")
        console.log(`name = ${this.name}`)
        console.log(`__username = ${this.getUserName()}`)
        console.log(`__password = ${this.getPassword()}`)
        console.log("-------------------------")
        console.log()
    }
}

let userOne = new Vault("Steve", "steve0233", "someStevy")
console.log(`Cant Access hidden Val = ${userOne.__password}`) // hidden property -> undefined
userOne.displayData()
userOne.setPassword("captainAme")
userOne.displayData()

let userTwo = new Vault("Adam", "blackAdam02", "Superman")
userTwo.displayData()


// ----- Inheritance in class -----

// !Note ---------------------------------------------------------------
//* super() function is called before using this keyword inside 
//* the child class constructor. As the child class is derived from the 
//* parent class, the initialization of this for the child class is 
//* done by the parent class constructor. So, the parent class 
//* constructor needs to be called inside the child class constructor, 
//* which is done with the super() function.
// !Note ---------------------------------------------------------------

class Human{
    constructor(_race, _sex){
        this.race = _race
        this.sex = _sex

        this.legs = 2
        this.arms = 2
    }

    hello(name){
        return `Hello ${name}`
    }
}

class Person extends Human{
    constructor(_name, _age, _race, _sex){
        super(_race, _sex)
        this.name = _name
        this.age = _age
    }

    display(){
        console.log(super.hello(this.name))
        console.log(`Race = ${this.race} | Sex = ${this.sex} | ` +
            `Name = ${this.name} | Age = ${this.age}`)
    }
}

var pOne = new Person("Alex", "33", "Asian", "M")
pOne.display()
var pTwo = new Person("Amanda", "31", "African", "F")
pTwo.display()