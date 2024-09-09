// CLASS EXPRESSION 

var Polygon = class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

var Square = new Polygon();
Square.height = 10;
Square.width = 10;
console.log(Square);

/*
var Square = new Polygon();
Square.height = 10;
Square.width = 10;
console.log(Square); // TypeError: Polygon is not a constructor

var Polygon = class Polygon{
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};
*/

// CLASS DECLARATION
class Hobbit {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}

var Frodo = new Hobbit();
Frodo.height = 100;
Frodo.weight = 300;  
console.log(Frodo);