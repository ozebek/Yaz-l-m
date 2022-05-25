/*
let birthYear = parseFloat(prompt("Kaç yılında doğdunuz?"))
let date = new Date
let year = parseFloat(date.getFullYear())
let age = year-birthYear
let yearsLeft = 18-age


if (age>=18) {
    console.log("Ehliyet alabilirsiniz")
}
else if(age<18){
    console.log("Ehliyet almanıza ",yearsLeft, " yıl kaldı")
}
else{
    console.log("YANLIŞ DEĞER")
}
*/

let month = parseFloat(prompt("Kaçıncı aydayız"))


switch(month){
    case 1:
        console.log("January")
    case 2:
        console.log("February")
}
