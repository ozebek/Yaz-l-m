let quote = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holcoes teaches us to help one another."
console.log(
    quote
)
let quote2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(
    quote2
)
let ten = "10"
console.log(
    typeof(ten),
    typeof(10)
)
console.log(
    typeof(parseInt(ten)),
    typeof(10)
)
let tenFloat = parseFloat("9.8")
let numTen = 10

console.log(`${tenFloat} is greater than ${numTen}: ${tenFloat < numTen}`)

console.log('Day 1\t3\t5')
console.log(
    "1 1 1 1\n2 2 1 "
)

let phrase = "You cannot end a sentence with because because because is a conjunction"
console.log(
    phrase.indexOf("because"),
    phrase.lastIndexOf("because")
)
console.log(
    phrase.substr(31,23)
)

let loveWord = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(
    loveWord.match("love")
)

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')


  

  let agree = confirm("'Are you sure you like to delete? '")
  console.log(agree)