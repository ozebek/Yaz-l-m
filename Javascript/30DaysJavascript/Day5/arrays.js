const pelinOzellik = ["güzel", "şahane", "sexy", "kocaman popolu ve memeli"]

console.log(
    "Pelin'in Özellikleri", pelinOzellik, pelinOzellik.length
)

let js = "Javascript"
const charsInJs = js.split("")
console.log(charsInJs)

let companiesWorked = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesWorked.split(",")
console.log(companies)

let text =  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(" ")
console.log(words)

console.log(companies[4])

let lastIndex = words.length-1
console.log(words[lastIndex])
words[lastIndex] = "sex."
words[1] = "hate"

console.log(words)

const mixList = pelinOzellik.concat(charsInJs).concat(companies).concat(words)
console.log(mixList)
console.log(words.indexOf("hate"))

//let indexOf = mixList.indexOf(prompt("Array'da aramak istediğiniz kelime:"))
/**
 switch (true) {
    case indexOf>=0 :
        console.log("Array'da var")
        
        break;

    default:
        console.log(
            "array'da yok"
        )
        break;
}

let check = mixList.includes(prompt("Array'da aramak istediğiniz kelime:"))

switch (check) {
    case true:
        console.log("includes")
        break;

    default:
        console.log("doesn't include")
        break;
}

 */
console.log(Array.isArray(companiesWorked))
console.log(Array.isArray(companies))

let wordsToString = words.toLocaleString()
let companiesJoined = companies.join(" ")

console.log(wordsToString)
console.log(companiesJoined)