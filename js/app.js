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
        // Increment age 
        i++

        // Update age property on myTamagotchi object
        myTamagotchi.age = i
    }, 3000)
    
}
// Allow user to give their pet a name when they click button
// Store in a variable called 'name'
let myTamagotchi;
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
    myTamagotchi = new Tamagotchi(name)
 
    // Start the aging
    aging(myTamagotchi);

    // Start incrementing hunger, sleepiness, and boredome metrics
    gettingHungry(myTamagotchi);
    gettingSleepy(myTamagotchi);
    gettingBored(myTamagotchi);
}

// STATS - functions to increase hunger, sleepiness, and boredom metrics
const gettingHungry = (myTamagotchi) => {
    let hunger = document.querySelector('.hunger')
    // Increase hunger every 10 seconds
    setInterval(function() {
        hunger.innerHTML = `Hunger: ${myTamagotchi.hunger}`
        // Update hunger property in Tamagotchi object
        myTamagotchi.hunger++
        
    }, 3000)
}

const gettingSleepy =(myTamagotchi) => {
    let sleepiness = document.querySelector('.sleepiness')
    // Increase sleepiness every 6 seconds
    setInterval(function () {
        sleepiness.innerHTML = `Sleepiness: ${myTamagotchi.sleepiness}`
        // Update sleepiness property in Tamagotchi object
        myTamagotchi.sleepiness++
    }, 6000)
}

const gettingBored =(myTamagotchi) => {
    let boredom = document.querySelector('.boredom')
    // Increase boredom every 4 seconds 
    setInterval(function () {
        boredom.innerHTML = `Boredom: ${myTamagotchi.boredom}`
        // Update boredom property in Tamagotchi object
        myTamagotchi.boredom++
    }, 4000)
}
// INTERACTIONS 
const feed = (myTamagotchi) => {
    // Decrement hunger by 1 everytime user feeds it
    if(myTamagotchi.hunger > 0) {
        myTamagotchi.hunger--
    }
    let hunger = document.querySelector('.hunger')
    hunger.innerHTML = `Hunger: ${myTamagotchi.hunger}`
    console.log(myTamagotchi.hunger, 'just fed')
}
const lights = () => {
    // Make background darker to simulate night time
    // Turning off lights allows pet to reduce sleepiness score
    let sleepiness = document.querySelector('.sleepiness')
    if(myTamagotchi.sleepiness > 0) {
        myTamagotchi.sleepiness--
    }
    sleepiness.innerHTML = `Sleepiness: ${myTamagotchi.sleepiness}`

    // Darken background
    let body = document.querySelector('body')
    console.log(body)
    body.classList.toggle('darken')
    console.log('switch lights')
}
const play = () => {
    console.log('play!')
}
// ---------------------------------------------------------------
// EVENT LISTENERS
// Listen for button click for when user wants to name their pet
document.querySelector('#name').addEventListener('click',giveName)
document.querySelector('#feed').addEventListener('click',() => {
    feed(myTamagotchi)})
document.querySelector('#lights').addEventListener('click', () => {
    lights(myTamagotchi)})
document.querySelector('#play').addEventListener('click', () => {
    play(myTamagotchi)})