/**
 
const emptyArray = Array()

const newArray = [1 , 2 , 3, 4 , 5 , 6 , 7]

console.log(emptyArray.length)
console.log(newArray.length)


let middleIndex = parseInt(newArray.length/2)
let lastIndex = newArray.length-1
let firstIndex = 0

console.log(newArray[middleIndex], " = Middle Index")
console.log(newArray[lastIndex], " = Last Index")
console.log(newArray[firstIndex], " = First Index")

const mixedDataTypes = [ 1 , true , false , "Matematik" , 0 , "Annen"]

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

let middleIndexIt = parseInt(itCompanies.length/2)
let lastIndexIt = itCompanies.length-1


console.log(itCompanies , itCompanies.length , itCompanies[middleIndexIt] , itCompanies[firstIndex] , itCompanies[lastIndexIt] )

for(i=0; i<=6; i++){
    console.log(itCompanies[i])
}
itCompanies[0]=itCompanies[0].toLocaleUpperCase()
itCompanies[1]=itCompanies[1].toLocaleUpperCase()
itCompanies[2]=itCompanies[2].toLocaleUpperCase()
itCompanies[3]=itCompanies[3].toLocaleUpperCase()
itCompanies[4]=itCompanies[4].toLocaleUpperCase()
itCompanies[5]=itCompanies[5].toLocaleUpperCase()
itCompanies[6]=itCompanies[6].toLocaleUpperCase()

console.log(itCompanies)

/**
 console.log(itCompanies[0],itCompanies[1],itCompanies[2],itCompanies[3],itCompanies[4],itCompanies[5]," and ", itCompanies[6], " are big IT companies.")
let companySearched = prompt("Check in IT Companies")
let isIncludes = itCompanies.includes(companySearched.toLocaleUpperCase())

switch (isIncludes) {
    case true:
        console.log(companySearched)
        break;

    default:
        console.log("Not found")
        break;
}



Filter out companies which have more than one 'o' without the filter method
Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found


itCompanies.sort()

console.log(itCompanies)
itCompanies.reverse()
console.log(itCompanies)


console.log(itCompanies.slice(0,4))

console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length))

console.log(itCompanies.slice((itCompanies.length/2),(itCompanies.length/2)+1))

console.log(itCompanies.splice(0,1))
console.log(itCompanies.splice((itCompanies.length/2),(itCompanies.length/2)+1))
console.log(itCompanies.slice(itCompanies.length-1,itCompanies.length))
console.log(itCompanies.splice(0,itCompanies.length+1))


let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(" ")
console.log(words)
console.log(words.length)


const shoppingCart = ["Milk", "Banana", "Apple", "Annen"]

shoppingCart.unshift("Meat")
console.log(shoppingCart)
shoppingCart.push("Sugar")
console.log(shoppingCart)
let isAllergic = confirm("Are you allergic to Apple",)
let appleNum = shoppingCart.indexOf("Apple")
switch (isAllergic) {
    case true:
        shoppingCart.splice(appleNum,1)
        console.log(shoppingCart)
        break;

    default:
        console.log(shoppingCart)
        break;
}
let annenNum = shoppingCart.indexOf("Annen")
shoppingCart[annenNum] = "Green Tea"
console.log(
    shoppingCart
)
const countries = ["amerika", "ethiopia", "turkey", "yarrakistan", "rüzgarınannesistan"]
let includesEthiopia = countries.includes("ethiopia")
console.log(includesEthiopia)

switch (true) {
    case includesEthiopia:
        console.log("ETHİOPİA")
        break;

    default:
        countries.push("ethiopia")
        break;
}

console.log(countries)

 */

const frontEnd = ['HTML', 'CSS', 'JS', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let includesReact = frontEnd.includes("React")

switch (includesReact) {
    case true :
        console.log("React")
        break;

    default:
        frontEnd.push("React")
        break;
}

console.log(frontEnd)

let bothEnd = frontEnd.concat(backEnd)
console.log(bothEnd)

