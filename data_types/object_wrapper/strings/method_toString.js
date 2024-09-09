/**
 * String.prototype.toString()
 * 
 * Parameter: None
 * 
 * Description:
 * String nesnesini temsil eden bir string değeri döndürür.
 * Object.prototype.toString() metodunu kalıtmaz.
 * String.prototype.valueOf() ile tamamen aynıdır.
 * 
 */

const strObj = new String('foo');

console.log(
    strObj,
    strObj.toString()
);