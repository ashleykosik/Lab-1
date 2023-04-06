// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

//Min & Max
let max = 0;
let min = 0;
for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
        max = array[i];
    }
    if (min > array[i]) {
        min = array[i];
    }
}
console.log(`${max}, ${min}`)


let array2 = [1, 4, 11, 2, 37, -4]

let max2 = 0;
let min2 = 0;
for (let i = 0; i < array2.length; i++) {
    if (max2 < array2[i]) {
        max2 = array2[i];
    }
    if (min2 > array2[i]) {
        min2 = array2[i];
    }
}
console.log(`${max2}, ${min2}`)

