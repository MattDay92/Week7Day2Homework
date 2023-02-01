//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const favFood = () => {
    return `My favorite ${Object.keys(person3)[0]}'s are ${person3.pizza[0]} and ${person3.pizza[1]}.  \n
    My favorite ${Object.keys(person3)[1]} is ${person3.tacos}.  \n
    My favorite ${Object.keys(person3)[2]} are ${person3.burgers}.  \n
    My favorite ${Object.keys(person3)[3]} flavors are ${person3['ice_cream'][0]} and ${person3['ice_cream'][1]}.  \n
    I have a lot of favorite ${Object.keys(person3)[4]}.  From ${Object.keys(person3.shakes[0])[0]}, I like ${person3.shakes[0].oberwise}.  \n
    From ${Object.keys(person3.shakes[0])[1]}, I like ${person3.shakes[0].dunkin}.  \n
    From ${Object.keys(person3.shakes[0])[2]}, I like ${person3.shakes[0].culvers}!  \n
    From ${Object.keys(person3.shakes[0])[3]}, I like the ${person3.shakes[0].mcDonalds}.  \n
    From ${Object.keys(person3.shakes[0])[4]}, I like the ${person3.shakes[0]['cupids_candies']}.` 
}

console.log(favFood(person3))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }

    this.addAge = () => {
        this.age++
    }
};

let p1 = new Person('Matt', 30)
p1.printInfo()
let p2 = new Person('Kelly', 30)
p2.printInfo()
p2.addAge()
p2.addAge()
p2.addAge()
p2.printInfo()


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const greaterThanTen = (string) => {
    return new Promise( (resolve, reject) => {
        if (string.length() > 10){
            resolve(true)
        }
        else {
            reject(false)
        }
    })
}

greaterThanTen('Mississippi')




