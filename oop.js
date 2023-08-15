const officer = 'NTSA'

// Creating a class
class Car {

    // This is a private attribute
    #idNumber

    // This is a static variable it is bound to the class
    static count = 0

    // Constructor creates the object's properties.
    constructor(make, model, year, owner, idNumber){
        // This is a public attribute
        this.make = make
        this.model = model
        this.year = year

        // This is a public attribute for setter and getter methods
        this._owner = owner

        // This is a private attribute
        this.#idNumber = idNumber
    }

    description(){
        return `This is a ${this.year} ${this.make} ${this.model}. It belongs to ${this._owner}.`
    }

    // getter method to get owner's name
    get owner(){
        return this._owner
    }

    // setter method to set new user's name
    set owner(newOwner){
        this._owner = newOwner
    }

    // get method to get id number
    get id(){
        if(officer === 'NTSA'){
            return this.#idNumber
        }else{
            return 'You are not authorized to view the id number.'
        }
    }

    // Static method is bound to the class
    static increaseCount(){
        return this.count++
    }

}

// Sub-class that inherits from the parent class.
class Bus extends Car {

    // create new object 
    constructor(make, model, year, owner, passengers, idNumber){
         super(make, model, year, owner, idNumber)
        this.passengers = passengers
    }
   
    // This is method overriding
    description(){
        return `This is a ${this.year} ${this.make} ${this.model} bus carries ${this.passengers} passengers and it belongs to ${this._owner}`
    }
}

// Creating a new object called whip.
const whip = new Car('Mercedes', 'E-class', 2007, 'Brian Osora', '1d2s3f')

// Printing out object calling its description method.
console.log(whip.description())

// Printing object Property
console.log(whip.owner)

// Setting new owner
whip.owner = 'Brian Isaboke'
console.log(whip.owner)

// Accessing class variable (static variable)
console.log(Car.count)

// calling a class method (static method)
Car.increaseCount()
console.log(Car.count)

// create a bus that inherits from car
const metro = new Bus('Isuzu', 'FH', 2019, 'Isaac Nyamaiko', 33, 'abcdefe')
console.log(metro.make)
console.log(metro.description())

