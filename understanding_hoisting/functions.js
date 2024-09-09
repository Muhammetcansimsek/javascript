/**
 * ORDER OF PRECEDENCE
 */
// Fonksiyon tanımlamak değişken tanımlamaya göre önceliği alır.
var double;
function double(num) {
    return num * 2;
}
console.log(typeof double); // Output: function


/* Değişkene değer ataması fonksiyon tanımlamaya göre önceliği alır.
var double = 22; // number

function double (num) { // function
    return num * 2;
}
console.log(typeof double); // Output: number
*/




/**
 * 1. Function declarations
 * 2. Function expressions
 * 


// FUNCTION DECLARATIONS

hoisted(); // Output: 'This function has been hoisted'
function hoisted() {
    console.log('This function has been hoisted');
}


// FUNCTION EXPRESSIONS

expression(); //Output: "TypeError: expression is not a function
var expression = function() {
    console.log('Will this work?');
}

*/