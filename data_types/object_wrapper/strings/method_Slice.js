/*
const str = "The quick brown fox jumps over the lazy dog.";
console.log(str.slice(31)); // Expected output: "the lazy dog."
console.log(str.slice(4, 19)); // Expected output: "quick brown fox"
console.log(str.slice(-4)); // Expected output: "dog."
console.log(str.slice(-9, -5)); // Expected output: "lazy"
*/

/**
 * Eğer indexStart >= str.length ise boş bir string döner.
 * Eğer indexStart < 0, resmi olarak max(indexStart + str.length, 0) olur.
 * Eğer indexStart atlanmış, undefined(tanımsız) veya number tipine dönüştürülemiyorsa 0 olarak kabul edilir.
 * Eğer indexEnd atlanmış, tanımsız(undefined) veya indexEnd >= str.length ise slice() str.length'e kadar alır.
 * Eğer indexend < 0 ise (indexEnd + str.length) olarak kabul edilir.
 * Eğer indexEnd <= indexStart ise boş bir string döner.
 */

// Examples
/*
const str1 = "The morning is upon us.";
const str2 = str1.slice(4, -2); // (str1.length - 2)
const str3 = str1.slice(12);
const str4 = str1.slice(30);
console.log(`str1 dize uzunluğu: ${str1.length}`);
console.log(str2); // Expected output: "morning is upon u"
console.log(str3); // Expected output: "is upon us."
console.log(str4); // Expected output: ""
*/

// Using slice() with negative indexes

const str = "The morning is upon us.";
const str2 = str.slice(-3); // Expected output: "us."
console.log(str2);
const str3 = str.slice(-3, -1); // Expected output: "us"
console.log(str3);
const str4 = str.slice(0, -1);
console.log(str4); // Expected output: "The morning is upon us"
const str5 = str.slice(4, -1);
console.log(str5); // Expected output: "morning is upon us"

