let sayılar = [
    1,4,55,66,6,3,2,7,10,11,20,0
]
for (i=0;i<sayılar.length; i++){
    console.log(sayılar[i]*sayılar[i])
}
for (i=0;i<sayılar.length;i++){
    if (sayılar[i]%5==0 && sayılar[i]!==0) {
        console.log(sayılar[i]) 
    }
}
let toplam = 0
for (i=0; i<sayılar.length; i++){
    if (sayılar[i]%2==0 && sayılar[i]!==0) {
        toplam += sayılar[i]
        console.log(toplam)
        
    }
}

let urunler = [
    "iphone 12", "samsung s22", "iphone 13", "samsung s23"
]
for (let i = 0; i < urunler.length; i++) {
    console.log(urunler[i].toLocaleUpperCase())
}
let samsungAdet = 0
for (let i = 0; i < urunler.length; i++) {
    if (urunler[i].includes("samsung")) {
        samsungAdet= samsungAdet+1
    }
}
console.log(samsungAdet)

let ogrenciler =[
    {
        "ad": "Ayşe", "notlar": [60,70,60]
    },{
        "ad": "Fatma", "notlar": [80,70,80]
    },{
        "ad": "Hayriye", "notlar": [70,70,60]
    }
]
let totalNotHayriye;
let totalNotAyşe;
let totalNotFatma;
for (let ogrenci of ogrenciler) {
    let totalNot = 0
    let ortalama = 0
    let adet = 0
    for (let notlar of ogrenci.notlar) {
        totalNot += notlar
        adet++
        if (ogrenci.ad === "Hayriye") {
            totalNotHayriye = totalNot/adet           
        }
        if (ogrenci.ad === "Ayşe") {
            totalNotAyşe = totalNot/adet        
        }
        if (ogrenci.ad === "Fatma") {
            totalNotFatma = totalNot/adet           
        }
    }
    ortalama = totalNot/adet
    console.log(
        ` ${ogrenci.ad} isimli öğrencinin ortalaması ${ortalama}'dır `
    )
}
let ogrenciAdet = 0
for (let ogrenci in ogrenciler) {
    ogrenciAdet++   
}
let ogrenciTotalOrt;
ogrenciTotalOrt = (totalNotFatma + totalNotAyşe + totalNotHayriye)/ogrenciAdet

if (totalNotFatma>totalNotHayriye&&totalNotFatma>totalNotAyşe ) {
    mostSuccessfull = "Fatma"   
    console.log(`En başarılı öğrenci ${mostSuccessfull}`)
}else if (totalNotHayriye>totalNotFatma&&totalNotHayriye>totalNotAyşe ) {
    mostSuccessfull = "Hayriye"  
    console.log(`En başarılı öğrenci ${mostSuccessfull}`) 
}else if (totalNotAyşe>totalNotHayriye&&totalNotFatma<totalNotAyşe ) {
    mostSuccessfull = "Ayşe"   
    console.log(`En başarılı öğrenci ${mostSuccessfull}`)
}else(
    console.log("Kimse en başarılı değil")
)
console.log(`Bütün öğrencilerin ortalaması ${ogrenciTotalOrt} `)






