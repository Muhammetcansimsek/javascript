/**
 * String.prototype.substring()
 * 
 * The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
 */

const str = 'Mozilla';

console.log(str.substring(1, 3)); // Expected output: "oz"

console.log(str.substring(2)); // Expected output: "zilla"

/**
 * 
 * indexEnd isteğe bağlıdır ve belirtilmezse, substring() metodu stringin sonuna kadar olan kısmı döndürür.
 * indexStart, indexEnd'e eşitse substring() boş bir string döndürür.
 * indexStart > indexEnd ise substring() indexleri değiştirir.
 * Sıfırdan küçük ve str.length'den büyük indexStart veya indexEnd değerleri, sırayla sıfır ve str.length'e eşit olur.
 * NaN olan değerlere 0 gibi davranılır.
 *
 * */

// Examples

const anyString = 'Mozilla';

console.log(anyString.substring(0, 1)); // Expected output: "M"
console.log(anyString.substring(1, 0)); // Expected output: "M"

console.log(anyString.substring(0, 6)); // Expected output: "Mozill"

console.log(anyString.substring(4)); // Expected output: "lla"
console.log(anyString.substring(4, 7)); // Expected output: "lla"
console.log(anyString.substring(7, 4)); // Expected output: "lla"

console.log(anyString.substring(0, 7)); // Expected output: "Mozilla"
console.log(anyString.substring(0, 10)); // Expected output: "Mozilla"

// substring() metodunu length ile kullanma

const text = "Mozilla";

console.log(text.substring(text.length - 4)); // Expected output: "illa"
console.log(text.substring(0, text.length - 4)); // Expected output: "Moz"

// substring() ve substr() metotları arasındaki farklar
console.log(text.substring(2, 5)); // "zil"
console.log(text.substr(2, 3)); // "zil"

// substring() vs slice()

