// veri türünü öğrenmek ve veri türü dönüşümleri

// veri türünü öğrenmek typeof:
let price = 111
let stringprice = "111"
let haspassword = true

console.log(
    "price: ",
    typeof(price)
)

console.log(
    "stringprice: ",
    typeof(stringprice)
)

console.log(
    "haspassword:",
    typeof(haspassword)
)

// string (metinsel) bilgileri int ve float'a dönüştürmek
let number1 = "111"
number1 = parseInt(number1)
    console.log(
        "Number1: ",
        parseInt(number1),
        typeof(number1)
    )

    let number2 = "px11px"
number2 = parseInt(number2)
    console.log(
        "Number2: ",
        parseInt(number2),
        typeof(number2)
    )

let number3 = "23.6px"
number3 = parseInt(number3)
    console.log(
        "Number3: ",
        parseFloat(number3),
        typeof(number3)
        )
    


// number veri tipinden string'e dönüştürmek
let number5 = 55
number5 = number5.toString(),
console.log(number5, typeof(number5))

console.log(typeof 'Asabeneh') // string
console.log(typeof 5) // number
console.log(typeof true) // boolean
console.log(typeof null) // object type
console.log(typeof undefined) // undefined