// ? var:BLOCK SCOPE ile oluşturulan değişkenlerde, değişkenin tanımlandığı blok dışında erişilebilir.

function fonksiyonExp() {
    if (true) {
        var degiskenExp = "Blok Değişken"; // ? var:BLOCK SCOPE ile oluşturulan değişkenlerde, değişkenin tanımlandığı blok dışında erişilebilir.
        console.log(degiskenExp);
    }
}

// ? let/const: bu değişken seçenekleri sadece block scope'da geçerlidir.
// ? const: const ile tanımlanan değişkenlerin değeri değiştirilemez. 
// ? let: let ile tanımlanan değişkenlerin değeri değiştirilebilir.

function fonksiyonExp2() {
    if (true) {
        let degiskenExp2 = "Blok Değişken"; // ? let/const: bu değişken seçenekleri sadece block scope'da geçerlidir.
        console.log(degiskenExp2);
    }
}

