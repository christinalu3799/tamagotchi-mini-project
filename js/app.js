let start = document.querySelector('#startGame');

// Allow user to give their pet a name when they click button
// Store in a variable called 'name'
const giveName = () => {
    let name = prompt('What would you like to name your new Tamagotchi?')
    console.log(name)
    let giveNameButton = document.querySelector('#name')
    // Remove button after user has given name
    giveNameButton.remove()

    // Create new element called 'greeting' to greet the user
    let greeting = document.createElement('h3')
    greeting.innerHTML = `Congrats on your new pet! Interact with ${name} using the buttons below. Have fun!`

    // Append this element to the dom
    let giveNameDiv = document.querySelector('#giveNameDiv')
    giveNameDiv.appendChild(greeting)
    return name
}

let name = document.querySelector('#name').addEventListener('click',giveName)

class Tamagotchi {
    constructor(name, hunger, sleepiness, boredom, age=0) {
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom; 
        this.age = age;
    }
}

// let myTamagotchi = new Tamagotchi(giveName())
// console.log(myTamagotchi)