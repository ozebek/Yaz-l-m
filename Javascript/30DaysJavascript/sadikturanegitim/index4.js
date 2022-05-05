// En büyüğü bulmak

let a = prompt("Sayı gir: ")
let b = prompt("Sayı gir: ")
let c = prompt("Sayı gir: ")

console.log("a sayısı en büyük mü?: ", (a>b) && (a>c))
console.log("b sayısı en büyük mü?: ", (b>a && (b>c)))
console.log("c sayısı en büyük mü?: ", (c>b && (c>a)))