const coffees = ['French Roast', 'Colombian', 'Kona']; 
// [ 'French Roast', 'Colombian', 'Kona' ]

const fish = ['Lion', , 'Angel'];
// [ 'Lion', <1 empty item>, 'Angel' ]
// console.log(fish[1]); // undefined
/**
 * İkinci eleman boş olduğu için bir "empt item" döndürür. 
 * Array.map metodu kullanıldığında boş eleman atlanır,
 * ancak indeks ile erişim sağlandığında undefined döndürür.
 * 
 * Eğer eleman listesinin sonuna bir virgül eklenirse, bu virgül görmezden gelinir.
 * 
 * 
 */

/* 
const myList = [,'home', ,'school', ,];
// console.log(myList.length); // 5
for (let i = 0; i < myList.length; i++) {
    console.log(myList[i]); // undefined, home, undefined, school, undefined
}

    *Yukarıdaki örnekte array uzunluğu 5 olarak görünüyor
    *örneğin myList[0], myList[2] ve myList[4] undefined döndürüyor
    *sondaki virgün görmezden gelinir ve array uzunluğunu etkilemez.
*/

const myList = [
    "home",
    "school",
    "hospital",
  ];
  
console.log(myList); // 3