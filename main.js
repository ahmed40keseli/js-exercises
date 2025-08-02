// 7,8 ve 9 alıştırmaları

let username = "ahmed"; //string

// function
// camelCase
function getName(name) { // function, parametre
    console.log(`Merhaba ${name}`); //string, consolelog
}

//getName(username);  // string, function çağrısı

// class
// PascalCase
class UserInfos {
    constructor(name, age) { // class, parametreler
        this.name = name; // int
        this.age = age; // int
    }
    // camelCase
    showInfos() { // method
        //console.log(`Kullanıcı Adı: ${this.name}, Yaş: ${this.age}`); // string
    }
}

//let user = new UserInfos("ahmed", 25); // class çağrısı ve parametreleri

//console.log("class",UserInfos);


//console.log(user.name); // string
//console.log(user.age); // int


// constant
// UPPER_SNAKE_CASE
const ADMIN_CODE = 1; // int

// array 

const arr = [1, 2, 3, 4, 5]; // object

arr.push(6); // int, arr + 6

// console.log(arr); // object


//? var variableType = "var"

//? let letType = "let"

//? const constType = "constType"

 // scope

//     var va = "va"
//     let la = "la"
//     const ca = "ca"

//     {
//         var vb = "vb"
//         let lb = "lb"
//         const cb = "cb"
//         console.log(vb);
//         console.log(lb);
//         console.log(cb);
//     }
//     console.log(va);
//     console.log(la);
//     console.log(ca);
// }

// console.log(va);
// console.log(vb);


alert("Merhaba JavaScript!");
console.log("Konsola yazdım!");
document.body.style.backgroundColor = "lightblue";
