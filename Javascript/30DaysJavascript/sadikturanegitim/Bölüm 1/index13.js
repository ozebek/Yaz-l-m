function Kelime(sınır, kelime) {
    for (let adet = 0; adet < sınır; adet++) {
        console.log(kelime)
        
    }
    
}
Kelime(1,"Sevgi")

function dikdörtgenAlan(en , boy) {
    let perimeter = 2*(en+boy)
    let area = en*boy
    console.log(`Alan ${area}, Çevre ${perimeter}`)
    
}
dikdörtgenAlan(12,23)


function yazıTura(start) {
    if (start == true) {
        let randomNum = Math.round(Math.random())
        if (randomNum == 0) {
            console.log("Tura")
        }else if( randomNum == 1){
            console.log("Yazı")
        }
    }
}
yazıTura(true)

function bolenler(number){
    let bolenler = [];
    for (let bolen = 0; bolen <= number; bolen++) {
        if ( number % bolen == 0 ) {
            bolenler.push(bolen)

            
        }
        
    }
    console.log(bolenler)

}
bolenler(128)


function toplam() {
    
    let sonuc = 0;
    for (let i = 0; i < arguments.length; i++) {
        sonuc+=arguments[i]
    }
    console.log(sonuc)
}
toplam(1,222,222)
