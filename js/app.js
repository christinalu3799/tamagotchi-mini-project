class Tamagotchi {
    constructor(name, hunger=1, sleepiness=1, boredom=1, age=0) {
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom; 
        this.age = age;
    }
}

// Make function age pet
const aging = (myTamagotchi) => {
    let i = 1
    // Make pet age 1 month every 3 seconds
    setInterval(function() {
        let age = document.querySelector('.age')
        if(i===1) {
            age.innerHTML = `Age: ${i} month`
        } else {
            age.innerHTML = `Age: ${i} months`
        }
        i++
        myTamagotchi.age = i
        console.log(myTamagotchi)
    }, 3000)
    
}
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
    greeting.innerHTML = `Interact with ${name} using the buttons below. Keep ${name} ALIVE!`

    // Append this element to the dom
    let giveNameDiv = document.querySelector('#giveNameDiv')
    giveNameDiv.appendChild(greeting)

    // Instantiate a new Tamagotchi pet from the Tamagotchi class
    let myTamagotchi = new Tamagotchi(name)
    console.log(myTamagotchi)
    
    // Start the aging
    aging(myTamagotchi);

    // Start incrementing hunger, sleepiness, and boredome metrics
    gettingHungry(myTamagotchi);
    gettingSleepy(myTamagotchi);
    gettingBored(myTamagotchi);
    // Return the Tamagotchi object
    return myTamagotchi
}

// STATS - functions to increase hunger, sleepiness, and boredom metrics
const gettingHungry = (myTamagotchi) => {
    let hungerLevel = 1
    // Increase hunger every 10 seconds
    setInterval(function() {
        let hunger = document.querySelector('.hunger')
        hunger.innerHTML = `Hunger: ${hungerLevel}`
        // Update hunger property in Tamagotchi object
        myTamagotchi.hunger = hungerLevel
        hungerLevel++
    }, 10000)
}

const gettingSleepy =(myTamagotchi) => {
    let sleepinessLevel = 1
    // Increase sleepiness every 6 seconds
    setInterval(function () {
        let sleepiness = document.querySelector('.sleepiness')
        sleepiness.innerHTML = `Sleepiness: ${sleepinessLevel}`
        // Update sleepiness property in Tamagotchi object
        myTamagotchi.sleepiness = sleepinessLevel
        sleepinessLevel++
    }, 6000)
}

const gettingBored =(myTamagotchi) => {
    let boredomLevel = 1
    // Increase boredom every 2 seconds (gets bored fast )
    setInterval(function () {
        let boredom = document.querySelector('.boredom')
        boredom.innerHTML = `Boredom: ${boredomLevel}`
        // Update boredom property in Tamagotchi object
        myTamagotchi.boredom = boredomLevel
        boredomLevel++
    }, 2000)
}

// INTERACTIONS 
const feed = () => {
    
    console.log('feed!')
}
const lights = () => {
    console.log('lights!')
}
const play = () => {
    console.log('play!')
}
// ---------------------------------------------------------------
// EVENT LISTENERS
// Listen for button click for when user wants to name their pet
document.querySelector('#name').addEventListener('click',giveName)
document.querySelector('#feed').addEventListener('click',feed)
document.querySelector('#lights').addEventListener('click',lights)
document.querySelector('#play').addEventListener('click',play)