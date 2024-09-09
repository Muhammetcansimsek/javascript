const re = /ab+c/;
/**
 * Düzenli ifadeler(RegEx) değişmez değerleri kod yüklendiğinde düzenli ifadenin
 * derlenmesini sağlar. Düzenli ifade sabit kalırsa bunu kullanmak
 * performansı artırır.
 */

const regularEx = new RegExp('ab+c');

/**
 * Kurucu fonksiyonun(constructor function), düzenli ifadenin(RegEx) çalışma zamanında
 * derlenmesini sağlar. 
 */

// Bir regular expression ifadesi yazmak
