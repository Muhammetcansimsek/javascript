/**
 * String() kurucusu string bir nesne oluşturur.
 * Fonksiyon olarak çağrıldığında, string bir tipin ilkel değerini döndürür.
 * 
 * new String(thing)
 * String(thing)
 * 
 */


/** COERSION
 * undefined -> "undefined"
 * null -> "null"
 * true -> "true"
 * 
 */


const strPrim = "foo"; // string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = new String(true); // Coerced into the string primitive "true";
const strObj = new String("foo"); // String with "new" keyword, it returns a wrapper "object"

console.log(
    strPrim instanceof String,
    strPrim2 instanceof String,
    strPrim3 instanceof String,
    strObj instanceof Object
);



const a = new String("Hello World");
const b = String("Hello World");
console.log(
    a instanceof String, // true
    b instanceof String, // false
    typeof a, // object
    typeof b // string
);


// Bir sembolü bir dizeye dönüştürmek için String() kullanın

 //const sym = Symbol("My symbol");
 // console.log(`${sym}`); // TypeError: Cannot convert a Symbol value to a string
 // console.log("" + sym); // TypeError: Cannot convert a Symbol value to a string
 // console.log("".concat(sym)); // TypeError: Cannot convert a Symbol value to a string


console.log(
   // String(sym),
    typeof sym
); // Symbol(My symbol)


