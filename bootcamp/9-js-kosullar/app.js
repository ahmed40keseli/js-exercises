// -----------------------------------koşul yapısı------------------------------------------ 

// if else yapısı

// let sayi = 10;

// if (sayi == 10) {
//     console.log("Sayı 10'a eşittir.");
// } else if (sayi < 10) {
//     console.log("Sayı 10'dan küçüktür.");
// } else {
//     console.log("Sayı 10'dan büyüktür.");
// }

// let fizik = 60;

// let matematik = 60;

// let teknolojiTasarım = 60;

// if (fizik) {
//     fizik > 50
//     console("Fizik dersinden geçtiniz.");
// }

// if (matematik) {
//     fizik > 50
//     console("matematik dersinden geçtiniz.");
// }

// if (teknolojiTasarım) {
//     fizik > 50
//     console("teknolojiTasarım dersinden geçtiniz.");
// }

//-----------------------------------------------------Example-1-----------------------------------------------------

// let boy = Number(183)
// let kilo = Number(85)

// if (!boy || !kilo) {
//     console.log("Lütfen boy ve kilo verilerini giriniz.");
// }

// kitleIndex = kilo / (boy * boy)

// if (kitleIndex < 18.5) {
//     console.log("Zayıf");
// } else if (kitleIndex < 25) {
//     console.log("Normal");
// } else if (kitleIndex < 30) {
//     console.log("Fazla Kilolu");
// } else if (kitleIndex < 35) {
//     console.log("Şişman");
// }

//-----------------------------------------------------Example-2-----------------------------------------------------

// if (0 < sayi) {
//     console.log("Sayı pozitif");
// } else if (0 > sayi) {
//     console.log("Sayı negatif");
// } else {
//     console.log("Sayı sıfır");
// }


// if (2025 - dogum <= 18) {
//     console.log("Ehliyet alabilir");
// } else {
//     console.log("Ehliyet alamaz");
// }

// if (90 < sinav) {
//     console.log("AA");
// } else if (80 < sinav < 89) {
//     console.log("BA");
// } else if (70 < sinav < 79) {
//     console.log("BB");
// } else if (60 < sinav < 69) {
//     console.log("CB");
// } else if (50 < sinav < 59) {
//     console.log("CC");
// } else if (sinav < 50) {
//     console.log("FF");
// }

const vakit = new Date().getHours();

if (vakit<11) {
    console.log("Günaydın");
}else if (12<vakit<17) {
    console.log("İyi günler");
}else if (18<vakit<23) {
    console.log("İyi akşamlar");
}


const password = "A123456a";

if (password.length <= 8) {
    console.log("Şifre 8 karakterden büyük olmalıdır.");
}else if (password.toUpperCase() === password) {
    console.log("Şifre küçük harf içermelidir.");
}else if (password.toLowerCase() === password) {
    console.log("Şifre büyük harf içermelidir.");
}