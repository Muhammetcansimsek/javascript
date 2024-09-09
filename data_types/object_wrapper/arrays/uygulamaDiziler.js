let dizi = ['elma','armut','muz','kivi','çilek'];
// Dizi kaç elemanlıdır?
console.log(
    dizi.length,
    dizi[0],
    dizi[dizi.length - 1],
    dizi.includes('elma'),
);

dizi.push('kiraz');
console.log(
    dizi,
);

let removedValues;
removedValues = dizi.pop();
console.log(
    removedValues,
);
removedValues = dizi.pop();
console.log(
    removedValues,
    dizi,
);

/** Aşağıdaki bilgileri bir dizi içerisinde tutunuz ve her öğrencinin yaşını hesaplayınız.
 * Öğrenci1 -> Yiğit Bilgiç 2010 (70,60,80)
 * Öğrenci2 -> Ada Bilgiç 2012 (80,80,90)
 * Öğrenci3 -> Ahmet Turan 2009 (90,90,75)
 */

let now = new Date();
let students = [
    ['Yiğit', 'Bilgiç', 2010, [70,60,80]],
    ['Ada','Bilgiç',2012,[80,80,90]],
    ['Ahmet','Turan',2009,[90,90,75]],
];
let studentAges = [
    now.getFullYear() - students[0][2],
    now.getFullYear() - students[1][2],
    now.getFullYear() - students[2][2],
];
console.log(
    studentAges,
);

let studentAvareges = [
    ((students[0][3][0] + students[0][3][1] + students[0][3][2]) / 3).toFixed(2),
    ((students[1][3][0] + students[1][3][1] + students[1][3][2]) / 3).toFixed(2),
    ((students[2][3][0] + students[2][3][1] + students[2][3][2]) / 3).toFixed(2),
];
console.log(
    studentAvareges,
);

/*
console.log(
    now.getFullYear(),
);
*/