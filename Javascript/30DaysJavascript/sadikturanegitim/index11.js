let siparisler = [
    {
        "siparis_id": 101,
        "siparis_tarihi": new Date(31/12/2022),
        "odeme_sekli": "Kredi Kartı",
        "kargo_adresi":{
            "mahalle":"Meydan Mahallesi",
            "cadde":"Yaşar Doğu Caddesi",
            "il": "Hatay",
            "ilçe": "İskenderun"
        },
        "ürünler":[
            {
            "ürün_id":1,
            "ürün_adı": "İphone 13 Pro",
            "ürün_url": "https://www.apple.com/tr/shop/buy-iphone/iphone-13-pro",
            "ürün_fiyat":22000
        },
        {
            "ürün_id":2,
            "ürün_adı": "İphone 13 Pro Max",
            "ürün_url": "https://www.apple.com/tr/shop/buy-iphone/iphone-13-pro/6.7-in%C3%A7-ekran-1tb-sierra-mavisi",
            "ürün_fiyat":26000,
        }],
        "musteri":{
            "musteri_id": 12,
        },
        "satici":{
            "firma_id": 34,
            "firma_adı": "Apple"
        }
    },{
        "siparis_id": 102,
        "siparis_tarihi": new Date(30/12/2022),
        "odeme_sekli": "Kredi Kartı",
        "kargo_adresi":{
            "mahalle":"Meydan Mahallesi",
            "cadde":"Yaşar Doğu Caddesi",
            "il": "Hatay",
            "ilçe": "İskenderun"
        },
        "ürünler":
            {
            "ürün_id":1,
            "ürün_adı": "İphone 13 Pro",
            "ürün_url": "https://www.apple.com/tr/shop/buy-iphone/iphone-13-pro",
            "ürün_fiyat":22000
        },
        "musteri":{
            "musteri_id": 12,
        },
        "satici":{
            "firma_id": 34,
            "firma_adı": "Apple"
        }

    }
]
let ürünBirKdvsiz = (siparisler[0].ürünler[0].ürün_fiyat)
let ürünBirKdvli = ürünBirKdvsiz*1.18
let ürünIkiKdvsiz = (siparisler[0].ürünler[1].ürün_fiyat)
let ürünIkiKdvli = ürünIkiKdvsiz*1.18
let siparis1UcretKdvsiz = ürünBirKdvsiz + ürünIkiKdvsiz
let siparis1UcretKdvli = ürünBirKdvli + ürünIkiKdvli
console.log(`Sipariş bir; ürün bir kdvsiz = ${ürünBirKdvsiz}, ürün iki kdvsiz ${ürünIkiKdvsiz}, ürün bir kdvli ${ürünBirKdvli}, ürün iki kdvli ${ürünIkiKdvli}, siparis bir ücreti kdv dahil ${siparis1UcretKdvli}, siparis iki ücreti kdvsiz ${siparis1UcretKdvsiz}`) 

let ürün1Kdvsiz = (siparisler[1].ürünler.ürün_fiyat)
let ürün1Kdvli = ürün1Kdvsiz*1.18
let siparisİkiUcretKdvsiz = ürün1Kdvsiz 
let siparisİKiUcretKdvli = ürün1Kdvli 
console.log(`Sipariş bir; ürün bir kdvsiz = ${ürün1Kdvsiz}, ürün bir kdvli ${ürün1Kdvli}, , siparis bir ücreti kdv dahil ${siparisİKiUcretKdvli}, siparis iki ücreti kdvsiz ${siparisİkiUcretKdvsiz}`) 

