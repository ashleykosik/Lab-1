//Demo

let backpack = [];
backpack.push('sword');
backpack.push('torch');
backpack.push('food')
backpack.push('shield')
console.log(backpack)

let sword = backpack.splice(0, 1)

//belt.push(backpack.splice(0, 1))

let belt = []
belt.push(sword[0])
console.log(belt)

backpack.push('furcoat')

let itemCount = backpack.length
console.log(itemCount)
console.log(backpack)
// if we want to wear the coat
backpack.pop()
let body = []
body.push('furcoat')
console.log(backpack, itemCount, belt, body)

for(let i = 0; i < backpack.length; i++) {
    console.log(backpack[i])
}

