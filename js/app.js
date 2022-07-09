class Tamagotchi {
    constructor(name, hunger=1, sleepiness=1, boredom=1, age=0) {
        this.name = name;
        this.hunger = hunger;
        this.sleepiness = sleepiness;
        this.boredom = boredom; 
        this.age = age;
    }
}

let myTamagotchi;
// Make function to age pet
const aging = () => {
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
        
        // Check age to evolve tamagotchi
        // Once age === 12, make tamagotchi 1 year old
        if(myTamagotchi.age === 12) {
            let babyPet = document.querySelector('.pet')
            babyPet.remove()
            let firstEvolution = document.createElement('img')
            firstEvolution.setAttribute('src','tamagotchi2.png')
            firstEvolution.setAttribute('class','pet')
            let petContainer = document.querySelector('.petContainer')
            petContainer.append(firstEvolution)
            alert(`Happy first birthday to ${myTamagotchi.name}!`)
        } 

        // Once age == 24, make tamagotchi turn 2 years old (final evolution)
        if(myTamagotchi.age === 24) {
            let firstEvolution = document.querySelector('.pet')
            firstEvolution.remove()
            let finalEvolution = document.createElement('img')
            finalEvolution.setAttribute('src','tamagotchi3.png')
            finalEvolution.setAttribute('class','pet')
            let petContainer = document.querySelector('.petContainer')
            petContainer.append(finalEvolution)
            alert(`${myTamagotchi.name} has completed the final evolution.`)
        }
    }, 1000)
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

// INTERACTIONS WITH BUTTONS
const feed = () => {
    // Decrement hunger by 1 everytime user feeds it
    if(myTamagotchi.hunger > 0) {
        myTamagotchi.hunger--
    }
    let hunger = document.querySelector('.hunger')
    hunger.innerHTML = `Hunger: ${myTamagotchi.hunger}`
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
    body.classList.toggle('darken')
}
const play = () => {
    let boredom = document.querySelector('.boredom')
    if(myTamagotchi.boredom > 0) {
        myTamagotchi.boredom--
    }
    boredom.innerHTML = `Boredom: ${myTamagotchi.boredom}`
}

// Check if hunger, sleepiness, or boredom has hit 10 yet 
const checkIfDead = () => {
    let myInterval = setInterval(function() {
        if(myTamagotchi.hunger === 10 || myTamagotchi.sleepiness === 10 || myTamagotchi.boredom === 10) {
            alert(`Sorry, ${myTamagotchi.name} has died.`)
            clearInterval(myInterval)
            // Stop animation and insert gravestone
            let pet = document.querySelector('.pet')
            pet.remove()
            let all = document.querySelector('.all')
            all.remove()
            let titles = document.querySelector('#giveNameDiv')
            titles.remove()
            let rip = document.createElement('img')
            rip.setAttribute('src','rip.png')
            rip.setAttribute('class','rip')
            let petContainer = document.querySelector('.petContainer')
            petContainer.appendChild(rip)
        }
    })
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
    let greeting = document.createElement('h2')
    greeting.innerHTML = `Interact with ${name} using the buttons below. Keep ${name} ALIVE!`

    let instructions = document.createElement('p')
    instructions.innerHTML = `Make sure ${name}'s hunger, sleepiness, and boredom levels stay below 10. If any of these stats hit 10, ${name} will die.`
    // Append this element to the dom
    let giveNameDiv = document.querySelector('#giveNameDiv')
    giveNameDiv.appendChild(greeting)
    giveNameDiv.appendChild(instructions)
    // Instantiate a new Tamagotchi pet from the Tamagotchi class
    myTamagotchi = new Tamagotchi(name)
 
    // Start the aging
    aging(myTamagotchi);

    // Start incrementing hunger, sleepiness, and boredome metrics
    gettingHungry(myTamagotchi);
    gettingSleepy(myTamagotchi);
    gettingBored(myTamagotchi);
    checkIfDead();
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
