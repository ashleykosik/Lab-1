console.log("Hello world!")

const firstName = "Ashley";
let age = 29

console.log(firstName);
console.log(age);
console.log(firstName + " is " + age + " years old ")

const isCool = true
if(isCool === true) {
    console.log("Ashley is cool");
} else {
    console.log("Ashley is not cool")
}

let x = 4
let y = 10
let z = 7 + 8
let sum = x + y + z;
console.log(sum);
console.log(sum + y);
console.log(sum - z + sum + y)

let str = "String"
let str2 = 'String'
let str3 = `String ${str} ${str2}`
console.log(str3);
let str4 = "String" + " String " + str3
console.log(str4);

let away = 115
let home = 115
if(away > home) {
    console.log("Away team wins!!")
} else if(away === home) {
    console.log("The score is tied")
} else {
    console.log("Home team wins!!");
}

let age = 10;
let age2 = 20;
let age3 = 21;

if (age >= age2) {
    console.log(age)
} 
if (age === age3) {
    console.log("It is the same");
}
if (age !== age2) {
    console.log("It is not the same" )
}