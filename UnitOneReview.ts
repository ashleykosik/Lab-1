//UnitOneReview
//string, number and boolean variables

let string = "hello"
let number = 19
let boo = true

// array
const codingLanguage = ['javascript', 'python', 'java', 'c++']

//third element

console.log(codingLanguage[2])

//make a copy of the array 

let codingLanguage2 = codingLanguage.slice() // copies everything

// add php to coding language

codingLanguage2.push('php')

// remove php

codingLanguage2.pop()

// remove javascript

codingLanguage2.shift()

// add html to the front

codingLanguage2.unshift('html')

// replace html with css

console.log(codingLanguage2)

codingLanguage2.splice(0,1, `css`)
console.log(codingLanguage2)

let replacement = codingLanguage2.splice(0,1, `css`)
console.log(replacement) // array with css
console.log(replacement[0]) // just value css

// print value of num if even, print num is not even if true
let num = 11

if (num % 2 === 0) {
    console.log(num)
} else {
    console.log(`${num} is not an even number`)
}

// if - else statement to change score # to letter grade

let grade = 83

if (grade > 70) {
    console.log("A")
} else if (grade >= 40) {
    console.log("B")
} else if (grade > 10) {
    console.log("C")
} else {
    console.log("D")
}

// switch statement

// switch(true) {
//     case grade > 70: console.log("A");
//     break;
//     case grade >= 40: console.log("B")
//     break;
//     case grade > 10: console.log("C")
//     break;
//     default: console.log("D")
// }

// for loop calculate total price
let price = [10, 5, 6]
let total = 0

for(let i = 0; i < price.length; i++) {
    total += price[i]
}
console.log(total)

// find the average price

let average = total / price.length
console.log(average)

// loop thorugh color area

let colors =['red', 'green', 'yellow', 'red', 'green']
colors.push('purple')
for (let i = 0; i < colors.length; i ++) {
    if (colors[i] === 'red') {
        console.log('apple')
    } else if (colors[i] === 'green') {
        console.log('melon') 
    } else if (colors[i] === 'yellow') {
        console.log('banana')
    } else {
        console.log('not a registered color')
    }
} 

console.log(colors)



// let fujiTons = []
// let galaTons = []
// let pinkTons = []

// for (let i = 0; i < fujiAcres.length; i++) {
//     let fuji = fujiAcres[i] * 6.5
//     fujiTons.push(fuji)
// }
// console.log(fujiTons)

// for (let i = 0; i < galaAcres.length; i++) {
//     let gala = galaAcres[i] * 6.5
//     galaTons.push(gala)
// }
// console.log(galaTons)

// for (let i = 0; i < pinkAcres.length; i++) {
//     let pink = pinkAcres[i] * 6.5
//     pinkTons.push(pink)
// }
// console.log(pinkTons)

// I don't know why it's printing out the arrays 7 times each, I attempted to push the value into empty arrays. If I came across this question in the wild I would use the map method but I know we haven't covered that yet.


// apples 1
let totalAcres = 0

for (let i = 0; i < 7; i++) {
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i]
}
console.log(totalAcres) // 15 + 26 + 22 

//apples 2

let averageDailyAcres = totalAcres / 7
console.log(averageDailyAcres)

//apples 3

while (acresLeft > 0) {
    acresLeft -= averageDailyAcres
    days += 1
    if (acresLeft > 0) {
    console.log(`after ${days} days ${acresLeft} acres are left to pick`)
 }
}
 console.log(days)

 // apples 4
 // let fujiTons = fujiAcres.map(function(apple) {
//     return apple * 6.5;
// })
// console.log(fujiTons)
