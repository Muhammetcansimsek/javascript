let hoist;
console.log(hoist); // UNDEFINED
hoist = 'The variable has been hoisted.';

/* 
console.log(hoist); 
let hoist = 'The variable has been hoisted.'; // ReferenceError: Cannot access 'hoist' before initialization
*/

/*
function hoist() {
    // var message; // HOISTED
    console.log(message);
    var message = "Hoisting is all the rage!";
}

hoist();

*/
/*
console.log(hoist); // UNDEFINED
var hoist = 'The variable has been hoisted.';
*/
/**
 * Yukarıdaki kod parçası kod yorumlayıcıya göre şu şekilde yorumlanır:
 * 
 * var hoist;
 * console.log(hoist);
 * hoist = "The variable has been hoisted.";
 */


/*function hoist() {
    a = 20;
    var b = 100;
}

hoist();

console.log(a);

 //hoist() fonksiyonunun içinde tanımlanan a değişkeni global bir değişken olur ve bu değişkenin değeri 20 olur.
try {
 
console.log(b);
/**
 * hoist() fonksiyonunun içinde tanımlanan b değişkeni yerel bir değişken olur ve 
 * Çıktı: `ReferenceError: b is not defined` hatası alınır.
 */  
/*
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("ReferenceError: Cannot access 'b' before initialization");
    }
}
*/

/*var x;
console.log(x === undefined); // true
x = 3;


(function () {
    try {
        console.log(x); // undefined
        var x = 5;
    }
    catch (e) {
        if(e instanceof ReferenceError) {
            console.log("ReferenceError: Cannot access 'x' before initialization");
        }
    }
})();


console.log(x === undefined); // true
var x = 3;

(function () {
    console.log(x); // undefined
    var x = "local value";    
})();

*/