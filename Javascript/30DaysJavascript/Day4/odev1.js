/**
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

 */


 let num = parseFloat(prompt("Pick a number"))
let modulus = num%2
switch (true) {
    case modulus === 0 :
        console.log("Even")
        break;

    default:
        console.log("Odd")
        break;
}

let score = parseFloat(prompt("What is your grade?"))
if(score<=50){
    console.log("F")
}
else if(score<=60){
    console.log("D")
}
else if(score<=70){
    console.log("C")
}
else if(score<=80){
    console.log("B")
}
else if(score<=100){
    console.log("A")
}

let month = prompt("What is the Month")
switch(month){
    case "December":
        console.log("It is Winter")
    break;
    case "February":
        console.log("It is Winter")
    break;
    case "January":
        console.log("It is Winter")
    break;
    case "March":
        console.log("It is Spring")
    break;
    case "May" :
        console.log("It is Spring")
    break;
    case  "April" :
        console.log("It is Spring")
    break;
    case "June" :
        console.log("It is Summer")
    break;
    case "July" :
        console.log("It is Summer")
    break;
    case "August" :
        console.log("It is Summer")
    break;
    case "September":
        console.log("It is Autumn")
    break;
    case "November":
        console.log("It is Autumn")
    break;
    case "October":
        console.log("It is Autumn")
    break;
}
let day = prompt("What is the day")
switch (day) {
    case "Sunday":
        console.log("Rest")
        break;
    case "Saturday":
        console.log("Rest")
        break;
    case "Friday":
        console.log("Go to work")
        break;
    case "Thursday":
        console.log("Go to work")
        break;
    case "Wednesday":
        console.log("Go to work")
        break;
    case "Monday":
        console.log("Go to work")
        break; 
    case "Tuesday":
        console.log("Go to work")
        break;
    default:
        console.log("Gün ismini doğru giriniz")
        break;
}
let now = new Date
let currentYear = now.getFullYear()

let januaryDays = 31
let februaryDays = 28
let marchDays = 31
let aprilDays = 30
let mayDays = 31
let juneDays = 30
let julyDays = 31
let augustDays = 31
let septemberDays = 30
let octoberDays = 31
let novemberDays = 30
let decemberDays = 31
let yearsRemained = Math.abs(2024-2000)%4
switch( true ){
    case yearsRemained>0:
        februaryDays=29
        break;
    default:
        februaryDays=28
        break;
}

let monthWithDay = prompt("Which month is it?")


switch (monthWithDay) {
    case "december":
        console.log(decemberDays)
    break;
    case "February":
        console.log(februaryDays)
    break;
    case "january":
        console.log(januaryDays)
    break;
    case "march":
        console.log(marchDays)
    break;
    case "may" :
        console.log(mayDays)
    break;
    case  "april" :
        console.log(aprilDays)
    break;
    case "june" :
        console.log(juneDays)
    break;
    case "july" :
        console.log(julyDays)
    break;
    case "august" :
        console.log(augustDays)
    break;
    case "september":
        console.log(septemberDays)
    break;
    case "november":
        console.log(novemberDays)
    break;
    case "october":
        console.log(octoberDays)
    break;
}

