
let marka = "Opel"
let model = "Anan"
let otomatik = "yes"


// if/else statement


if(otomatik=="yes"){
    console.log("Araç otomatiktir.");
} 
else{
    console.log("Araç otomatik değildir.")
}

otomatik = true;
if(otomatik){
    console.log(marka + " " + model + " Otomatik ")
}

if(otomatik== "true"){
    console.log("true")
}
if(10==="10"){
    console.log("sayılar eşit");
}


//SWİTCH STATEMENT

// 1 = Manuel
// 2 = Otomatik

let vites = "1"

if(vites=="2"){
    console.log("Araç Manuel")
}
else if( vites=="2"){
    console.log("araç otomatiktir")
}
else{
    console.log("yanlış değer")
}

let vitess = prompt("")
switch(vitess){
    case "1" :
        console.log("araç manuel");
        break;
    case "2" :
        console.log("araç otomatik")
    default :
        console.log("yanlış değer")
}
