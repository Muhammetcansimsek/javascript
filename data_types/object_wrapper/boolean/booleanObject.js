/**
 * 
 * //const isObject = (obj) => Boolean(obj) && typeof obj === 'object';

//const isObject = (obj) => !!obj && typeof obj === 'object';

//const isObject = (obj) => obj !== null && typeof obj === 'object';

// Instead of this:
// This may return falsy values that are not equal to false
const isObject = (obj) => obj && typeof obj === "object";


const testObject = [
    null,       //false
    undefined,  //false
    {},         //true
    { a: 1 },   //true
    [],         //true
    [1, 2, 3],  //true 
    'string',   //false
    42,         //false
    true,       //false
    () => {},   //false
];

testObject.forEach( (obj, index) => {
    console.log(`${index + 1}.${isObject(obj)}`);
});
 * 
 */


/**
 *  Boolean Primivites and Boolean Objects
 */

let expression = 42;

//const good = Boolean(expression);
//const good = !!expression;
const bad = new Boolean(expression);


if(bad){
    console.log('bad is boolean');
} else {
    console.log('bad is not boolean');
}

