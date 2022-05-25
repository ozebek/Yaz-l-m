let yourAge = parseFloat(prompt("How old are you?"))
let yearsLeft = 18-yourAge

switch (true) {
    case yourAge>=18:
        console.log("You are old enough to drive")
        break;

    default:
        console.log("You need to wait ",yearsLeft," years to drive")
        break;
}
let myAge = 17
let ageDiff = Math.abs(yourAge-myAge)
switch (true) {
    case yourAge>myAge:
        console.log("I am " , ageDiff ," years younger than you.")
        break;
    case myAge>yourAge:
        console.log("I am " , ageDiff ," years older than you.")
        break;
    default:
        console.log("We are at the same age")
        break;
}