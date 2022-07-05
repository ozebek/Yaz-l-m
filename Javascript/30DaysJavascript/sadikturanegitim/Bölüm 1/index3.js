let name = prompt("Adınızı Soyadınızı giriniz:")
let ogranciNo = prompt(" Öğrenci Numaranızı Giriniz: ")
let gender = prompt("Cinsiyetiniz erkek mi?: ")
let subject = "matematik"
let grade1 = prompt("İlk sınav notunuzu giriniz: ")
let grade2 = prompt("İkinci sınav notunuzu giriniz: ")
let ortalama = parseInt(grade1)*.6+parseInt(grade2)*.4 
console.log("Ad Soyad: "+ name + "Okul no: " + ogranciNo + "Cinsiyeti Erkek?" + subject + " Dersinden" + ortalama + " notuyla geçmiştir")