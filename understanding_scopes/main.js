// GLOBAL SCOPE
var x = 1;
let y = 2;
//const z = 3;

// BLOCK SCOPE
{
    let p = 110;
    const q = 111;
}

//console.log(q); // ReferenceError: q is not defined

// FUNCTION SCOPE
function printIfGFG( text ) {
    if (text == "GeeksforGeeks" || text == 'GFG') {
        let message = 'Verified Geek';
        console.log(message);
    }
    try {
        console.log(message);
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log('ReferenceError: message is not defined');
        }
    }
    
}
printIfGFG('GFG'); // Verified Geek


/*
function example() {
    let y = 4;
    const z = 5;
    console.log(z);

    {
        let y = 4;
        const z = 5;
    }
}

example();
*/