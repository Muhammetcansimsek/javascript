/* 
 * Arithmetic Operators
 * Assignmen Operators
 * Comparison Operators
 * Logical Operators
*

// Arithmetic Operators
const sonuc = (a, b, islem) => {
    if(islem === "+") return `${a} + ${b}: ${ a + b }`;
    else if(islem === "-") return `${a} - ${b}: ${ a - b }`;
    else if(islem === "*") return `${a} * ${b}: ${ a * b }`;
    else if(islem === "/") return `${a} / ${b}: ${ a / b }`;
    else return "Geçersiz işlem";
};
console.log(sonuc(10, 5, "/"));

// Assignment Operators
const assinmentSonuc = (x, y, islem) => {
    if(islem === "+") return `${x} += ${y}: ${ x += y }`;
    else if(islem === "-") return `${x} -= ${y}: ${ x -= y }`;
    else if(islem === "*") return `${x} *= ${y}: ${ x *= y }`;
    else if(islem === "/") return `${x} /= ${y}: ${ x /= y }`;
    else return "Geçersiz işlem";

};
**/

/**
* öğrenci1:
 *  isim: "ada_bilgi"
 *  doğum tarihi : 2012
 *  matematik notları: 70, 70, 80
 * 
 * öğrenci2:
 *  isim: "yiğit_bilgi"
 *  doğum tarihi: 2010
 *  matematik notları: 40, 40, 50
 * 
 * öğrencilerin yaş bilgilerini değişkende tutunuz.
 * öğrencilerin ders ortalamalarını değişkende tutunuz.
 * öğrencilerin 50 geçme notuna göre başarı durumlarını değişkende tutunuz.
 */

const ogrenci = (isim, dogumTarihi, matematikNotlari) => {
    return {
        isim: isim,
        dogumTarihi: dogumTarihi,
        basariDurumu: (matematikNotlari >= 50) ? "Geçti" : "Kaldı"
    };
};
const notOrtalamasi = (notlar) => {
    let toplam = 0;
    notlar.forEach((not) => {
        toplam += not;
    });
    return Number(toplam / notlar.length);
};
const ogrenci1 = ogrenci("ada bilgi", 2012, notOrtalamasi([70, 70, 80]));
const ogrenci2 = ogrenci("yiğit bilgi", 2010, notOrtalamasi([40, 40, 50]));

console.log(ogrenci1);
console.log(ogrenci2);
