for (let i=10; i<=100; i++){
    console.log(i)
}

let i = 10

while(i<=100){
    console.log(i);
    i = i+5;
}

let r_username = "guest";
let r_password = "12345";
let loggedIn = false;
let username= prompt("Kullanıcı adı:");
let password = prompt("Parola: ");

while(!loggedIn){
    let username= prompt("Kullanıcı adı:");
    let password = prompt("Parola: ");
if((r_password===password)&&(r_username===username)){
    console.log("Giriş Başarılı");
    loggedIn=true;
}
else{
    console.log( `Annen ${r_username}`)
}
}




