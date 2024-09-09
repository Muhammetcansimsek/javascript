/**
 * indexOf(searchValue);
 * indexOf(searchValue, position); 
 */

/*
const paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

const searchTerm = "dog";
const indexOfFirst = paragraph.indexOf(searchTerm);
// Expected output: 40

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);

console.log(
    `The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, indexOfFirst + 1)}
    `); 
// Expected output: 52
*/

"hello world hello".indexOf('o', -5); //return 4
"hello world hello".indexOf('world', 12); //return -1
"hello world hello".indexOf('o', 99); //return -1 

"hello world".indexOf(""); // return 0
"hello world".indexOf("", 0); // return 0
"hello world".indexOf("", 3); // return 3
"hello world".indexOf("", 8); // return 8
"hello world".indexOf("", 12); // return 11

// `indexOf()` method is case sensitive
"Blue Whale".indexOf("blue"); // return -1

// Olayları Kontrol Etme
"Blue Whale".indexOf("blue") !== -1 ? "Blue Whale içerisinde Blue kelimesi geçmektedir." : "Blue Whale içerisinde Blue kelimesi geçmemektedir.";

// Bir dizedeki bir harfin sayısını bulmak için indexOf() metodu kullanılabilir.

const str = "To be, or not to be, that is the question.";
let count = 0;
let position = str.indexOf("e"); // Return 4

while(position !== -1) {
    count++;
    position = str.indexOf("e", position + 1);
}

console.log(count);