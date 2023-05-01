varsAndConditionals.js

// variable for jon and jamie's attack

let jonSnowAttack = 25
let jamieLannisterAttack = 35

// compare strength with if else statement

if(jonSnowAttack > jamieLannisterAttack) {
    console.log('jon has greater attack')
} else {
    console.log('jamie has greater attack')
}
// what if we have a tie
if(jonSnowAttack > jamieLannisterAttack) {
    console.log('jon has greater attack')
} else if (jonSnowAttack === jamieLannisterAttack) {
    console.log('jamie has greater attack')
}
//
let jonSnowHealth = 100
let jonSnowDefense = 0

if(jonSnowHealth <= jamieLannisterAttack) {
    console.log("jon snow has been slain")
} else {
    jonSnowHealth -= jamieLannisterAttack
    console.log(jonSnowHealth)
}
// increase jon's defense by 25

jonSnowDefense += 25

// jamie attacks again

if (jamieLannisterAttack >= (jonSnowDefense + jonSnowHealth) {
    console.log("jon snow has been slain")
} else {
    jonSnowHealth = jonSnowHealth - (jamieLannisterAttack - jonSnowDefense)
    console.log(jonSnowHealth)
} // brings health down to 90
// health kit +50 points buy jon's health max at 100

let healthKit = 50

if (jonSnowHealth === 100) {
    console.log("jon's helath is maxed")
} else if (jonSnowHealth < 100) {
    jonSnowHealth += 50
}

//they decide to flip a coin, heads jamie attacks, tail jon runs away

let coinLandsHeads = false
//empty string always returns false

if (coinLandsHeads) // this means true
if (!coinLandsHeads) // this means false

if (coinLandsHeads) {
    console.log("jon is slain")
} else {
    console.log("jon runs away")
}

//battle scene: jamie attacks 4 times, console log his health 

for (let = 0; i < 5; i++) {
    if (jamieLannisterAttack >= (jonSnowDefense + jonSnowHealth)) {
    console.log("jon snow has been slain")
    // add break or return here to avoid multiple print outs
} else {
    jonSnowHealth = jonSnowHealth - (jamieLannisterAttack - jonSnowDefense)
    console.log(jonSnowHealth)
}
}
// while loop jamie attack until jon slain

while (jonSnowHealth >= 0) {
    if (jamieLannisterAttack >= (jonSnowDefense + jonSnowHealth)) {
    console.log("jon snow has been slain")
} else {
    jonSnowHealth = jonSnowHealth - (jamieLannisterAttack - jonSnowDefense)
}
}
