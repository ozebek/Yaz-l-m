let firstNumber = parseFloat(prompt("first number?"))
let secondNumber = parseFloat(prompt("second number?"))
let thirdNumber = parseFloat(prompt("third number?"))


if(firstNumber>secondNumber && firstNumber>thirdNumber){
    console.log( firtsNumber, " en büyüktür")
}
if (secondNumber>firstNumber && secondNumber>thirdNumber) {
    console.log(secondNumber," en büyüktür")
}
if (thirdNumber>firstNumber && thirdNumber>secondNumber) {
    console.log(thirdNumber, "en büyüktür")
    
}else {
    console.log("Falsy Input")
}

