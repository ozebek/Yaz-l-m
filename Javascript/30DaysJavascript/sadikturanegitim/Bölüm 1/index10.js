let now = new Date
const trafikCikis = new Date("04/20/2016")
trafikCikis.setHours(0,0,0)

let trafikteMs = Date.now() - trafikCikis.getTime()
let trafiktekiGün = Math.floor(trafikteMs/(1000*60*60*24))
let trafiktekiYil = (trafiktekiGün/365)
console.log(trafikteMs)
console.log(trafiktekiYil)
console.log(trafiktekiGün)


if (trafiktekiYil>(Math.ceil(trafiktekiYil)-(1/365)) || trafiktekiYil< (Math.floor(trafiktekiYil)+(1/365))) {
    if (trafiktekiYil>Math.ceil(trafiktekiYil)-(1/365)) {
        let year =parseInt(trafiktekiYil)
        
    } else if(trafiktekiYil>Math.floor(trafiktekiYil)+(1/365)){
        let year = Math.floor(trafiktekiYil)


    } else {

    }
    console.log(`${trafiktekiYil}. bakımınız için servis yetkilinizle iletişime geçiniz`)
}else{
    console.log("sg")
}





 let userName = prompt("Who are you?")
if (userName == "admin") {
    let password = prompt("What is Password")
    if (password == "TheMaster") {
        console.log("Loged in")   
    }
    if (password == "cancel") {
        console.log("refresh the page to log in" ) 
    } else {
        if (password !== "TheMaster") {
            console.log("Fuck Off")
        }  
    }  
} if (userName == "cancel") {
    console.log("refresh the page to log in")    
} else {
    if (userName !== "admin") {
        console.log("Fuck Off")
    }
    
}


