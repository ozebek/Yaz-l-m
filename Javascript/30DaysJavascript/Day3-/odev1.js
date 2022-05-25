/*

//let firstName = prompt("Adınız nedir?")
//let lastName = prompt("İsminiz Nedir")
//let age = parseInt(prompt("Yaşınız nedir?"))
//let isMarried = true
//let year = now.getFullYear()

/*
console.log(
    typeof firstName,
    typeof lastName,
    typeof age,
    typeof isMarried,
    typeof year
) 


console.log(
    typeof "10",
    typeof 10
)

console.log(
    Math.ceil(parseInt("9.8")),
    10
)

let length = 1

let annen = true

let baban = 2

let deden = 0

let ninen = null

let teyzen = undefined

console.log(
4 > 3,
4 >= 3,
4 < 3,
4 <= 3,
4 == 4,
4 === 4,
4 != 4,
4 !== 4,
4 != '4',
4 == '4',
4 === '4',
)
let python = "Python"
let javascript = "Javascript"
let lengthPython = python.length
let lengthJavascript = javascript.length
 
console.log(
    lengthPython>lengthJavascript
)

console.log(
4 > 3 && 10 < 12, //true
4 > 3 && 10 > 12, //false
4 > 3 || 10 < 12, //true
4 > 3 || 10 > 12, //true
!(4 > 3), //false
!(4 < 3), //true
!(false), //true
!(4 > 3 && 10 < 12), //false
!(4 > 3 && 10 > 12), //true
!(4 === '4'), //true
)
let now = new Date
let year = now.getFullYear()
let month = now.getMonth()
let date = now.getDate()
let day = parseInt(now.getDay())
let hours = now.getHours()
let minutes = now.getMinutes()
let timeSince1970 = now.getTime()


console.log(
    now,year,month,date,day,hours,minutes,timeSince1970
)


let base = prompt("Enter Base:")
let height = prompt("Enter Height")
let area = .5*parse<(height)*parseInt(base)
console.log(
    area
)


let sideA = prompt("First Side")
let sideB = prompt("Second Side")
let sideC = prompt("Third Side")
let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC)
console.log(
    perimeter
)

let side1 = prompt("İlk kenar")
let side2 = prompt("ikinci kenar")
let area = side1 * side2
let perimeterSquare = (parseFloat(side1) + parseFloat(side2))*2
console.log(
    area,
    perimeterSquare
)

let radius = prompt("Yarıçap nedir")
const PI = Math.PI
let circleArea = radius*radius*PI
let circlePerimeter = 2*PI*radius
console.log(
    circleArea, circlePerimeter
)
*/

/*
 let hoursWorked = parseFloat(prompt("How many hours have you worked this week"))
let payRate = 30
let moneyEarned = hoursWorked*payRate
console.log(
    "You have earned", moneyEarned , " dollars"
)

let firstName = "Bekir"
let surName = "Özer"
let surNameLength = surName.length
let firstNameLength = firstName.length

if (surNameLength>firstNameLength){
    console.log(
        "Your Surname, ", surName, ", is longer"
    )
}
else if(firstNameLength>surNameLength){
    console.log(
        "Your name,",firstName,", is longer"
    )
}
else{
    console.log("They are equal in length")
}

let myAge = parseFloat(prompt("How old are you?"))
let yourAge = 141
let ageDiffYoung = yourAge-myAge
let ageDiffOld = myAge-yourAge

if(myAge>yourAge){
    console.log(
        "I am ", ageDiffOld, " years older than you."
    )
}
else if(yourAge>myAge){
    console.log(
        "I am ", ageDiffYoung, "years younger than you." 
    )
}
else{
    console.log(
        "We are at the same age"
    )
}
 */
let now = new Date
let currentYear = now.getFullYear()
let birthYear = parseFloat(prompt("What year were you born?"))
let age = currentYear-birthYear
let yearsLefttoDrive = 18-age

if(age>=18){
    console.log("You are ", age ,". You are old enough to drive")
}
else{
    console.log("You are " , age , ". You should wait", yearsLefttoDrive ," years to drive")
}

let yearsLived = parseFloat(prompt("How many years have you lived?"))
let secondsLived = 31536000*yearsLived

console.log(
    "You have lived", secondsLived , " seconds."
)

/**
 let month = now.getMonth()
let day = now.getDay()
let hours = now.getHours()
let minutes = now.getMinutes()
let seconds = now.getSeconds()
 */


let timestamp = Date.now();
console.log(new Date(timestamp))
