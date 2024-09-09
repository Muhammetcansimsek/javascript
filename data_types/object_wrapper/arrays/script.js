// Array Methods

let colours = ["red", "green", "blue"];
let rValue;
/*
colours.forEach((item) => {
    console.log(item);
});
*/

rValue = colours.toString(); // red,green,blue
 
rValue = colours.join(" - "); // red - green - blue
//console.log(rValue);

// remove last element
rValue = colours.pop(); // blue
console.log(
    colours,
    rValue
);

colours.push('black');
console.log(
    colours
);

rValue = colours.shift(); // red
console.log(
    colours,
    rValue
);

let brand = ["BMW", "Audi", "Mercedes"];
let brand2 = ["Toyota", "Honda", "Nissan"];

rValue = brand.concat(brand2);
console.log(
    rValue
);

rValue = brand.splice(0, 1, brand2);
console.log(
    rValue,
    brand
);