// *** Number ***
// Number veri türü tanımlamak:

let price = 100
let taxrate = 0.15
let tax = price*taxrate
let totalprice = price + tax
console.log(
"Fiyat:", price, 
"KDV Oranı", taxrate, 
"KDV Değeri", tax, 
"Total Fiyat",totalprice
)

let stringnumber = "11"
console.log(stringnumber)
let newNumber = Number(stringnumber)
console.log(newNumber)
console.log("Number Constructor içine bilgi gönderildi:", Number("111"))
// arttırma ve azaltma işlemleri:
let counter = 320
counter = counter + 1 // uzun yöntem
counter += 1;
counter ++;

console.log(
    counter
    )
counter--;
console.log(
    counter
)

counter*=10.5  // çarpma işlemi
console.log(
    counter
)
 counter/=3 // bölme işlemi
 console.log(
     counter
 )

//işlem önceliği
console.log(2 + 3 * 10)
console.log((2 + 3) * 10)

// mod (kalan) alma %:
//tek mi çift mi
console.log( 14 % 2) // sonuç 0 ise çift 1 ise tek

//8 ürün alan kolide kaç kaldı
console.log(
    "Kalan Koli Örneği:", 18%8
)

// üs alma **:
console.log(
    2*2*2*2*2
)
console.log(
    2**5
)

// aşağı yuvarlama işlemi -> Math.floor :
console.log(
    Math.floor(1.999999)
)

// yukarı yuvarlama işlemi -> Math.ceil :
console.log(
    Math.ceil(1.999999)
)

// yakına yuvarlama işlemi -> Math.round :
console.log(
    Math.round(1.999999)
)