const kola=50
const cips=60
const cikolata=35
let toplam=kola+cips+cikolata 

console.log(toplam);

//! bir arttır

toplam=toplam+1
console.log(toplam);

toplam++
console.log(toplam);

//! 10 arttır

toplam+=10 //toplam=toplam+10 

console.log(toplam);

//! + operatoru stringlerde birlestirme yapar (concatination) islemi yapar

const ad="joseph"
const soyad="bilir"

console.log("adim ve soyadim "+ ad + "" + soyad );

console.log(`adim ve soyadim ${ad} ${soyad}`);

//! arttırma azaltma

let a=5
console.log("ilk", a++);

console.log("ikinci", a); //6

let b=a++

console.log("b:", b); //6
console.log("a:", a); //7

let c=10
console.log(++c); //11

let e=45
console.log(e--); //45
console.log(e); //44
console.log(--e); //43


//! e yi 5 arttır

e+=5
console.log(e); //48

//! e nin 5 katini gör

e*=5
console.log(e); //240

//! carpma ve üs alma

const pi =3.14

const yaricap=5

const alan=pi*yaricap**2

console.log(alan);













