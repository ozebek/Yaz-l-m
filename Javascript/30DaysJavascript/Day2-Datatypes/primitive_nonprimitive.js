//**Data Types

//Primitives
let word = 'JavaScript'
word[0] = 'Y'

//Comparing Primitives
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)      // true

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)             //false 

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff) // false


let nums = [1, "bekir", true, null, undefined]
nums[0] = true
console.log(nums)


let num1 = {
    name:"Bekir",
    role:"motherfucker",
    country:"Turkey"
}
let num2 = {
    name:"Bekir",
    role:"motherfucker",
    country:"Turkey"
}
console.log(num1==num2)  // false

// Comparing Non-Primitives
let nums6 = [1, 2, 3]
let numbers = [1, 2, 3]

console.log(nums6 == numbers)  // false