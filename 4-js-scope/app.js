// ? SCOPE: türkçede kapsam anlamına gelir. Bir değişkenin erişilebilirliği ve nerelerden erişilebileceğini belirler. 

    // GLOBAL SCOPE: Global kapsam, bir değişkenin tüm dosya boyunca erişilebilir olduğu kapsamdır.

    var degisken1 = "Global Değişken";

    function fonksiyon1() {
        console.log(degisken1);
    }

    fonksiyon1();

    // FUNCTION SCOPE: Fonksiyon kapsamı, bir değişkenin tanımlandığı fonksiyon içinde erişilebilir olduğu kapsamdır.

    function fonksiyon2() {
        var degisken2 = "Fonksiyon Değişken";
        console.log(degisken2);
    }

    console.log(degisken2); // ! Hata verir. Çünkü degisken2 fonksiyon kapsamında tanımlıdır.

    fonksiyon2();

    // BLOCK SCOPE: Blok kapsamı, bir değişkenin tanımlandığı blok içinde erişilebilir olduğu kapsamdır. 
    // Blok, süslü parantezlerle tanımlanan alanlardır.

    function fonksiyon3() {
        if (true) {
            var degisken3 = "Blok Değişken";
            console.log(degisken3);
        }
    }
