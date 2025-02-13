// -----------------------------------koşul yapısı------------------------------------------ 

// if else yapısı

let sayi = 10;

if (sayi == 10) {
    console.log("Sayı 10'a eşittir.");
} else if (sayi < 10) {
    console.log("Sayı 10'dan küçüktür.");
}else {
    console.log("Sayı 10'dan büyüktür.");
}

let fizik = 60;

let matematik = 60;

let teknolojiTasarım = 60;

if (fizik) {
    fizik > 50
    console("Fizik dersinden geçtiniz.");
}

if (matematik) {
    fizik > 50
    console("matematik dersinden geçtiniz.");
}

if (teknolojiTasarım) {
    fizik > 50
    console("teknolojiTasarım dersinden geçtiniz.");
}

//-----------------------------------------------------Example-----------------------------------------------------

let boy = Number(183)
let kilo = Number(85)

if (!boy || !kilo){
    console.log("Lütfen boy ve kilo verilerini giriniz.");
}

kitleIndex = kilo/(boy*boy)

if(kitleIndex<18.5){
    console.log("Zayıf");
}else if(kitleIndex<25){
    console.log("Normal"); 
}else if(kitleIndex<30){
    console.log("Fazla Kilolu");
}else if(kitleIndex<35){
    console.log("Şişman");
}