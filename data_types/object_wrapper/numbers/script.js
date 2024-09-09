let sonuc;

sonuc = '10';
/*
// Constructor aracılığı ile number tipine çevirme
sonuc = Number('10');
*/

/**
 * parseInt aracılığı ile number tip dönüşümü
sonuc = parseInt('10');
*/

sonuc = Math.round(2.5); // Hangi tarafa daha yakınsa ona yuvarlar
//console.log(sonuc);

sonuc = Math.ceil(2.1); // Daima yukarı yuvarlar
//console.log(sonuc);

sonuc = Math.floor(2.9); // Daima aşağı yuvarlar
//console.log(sonuc);

sonuc = Math.abs(-10); // Mutlak değer
//console.log(sonuc);

sonuc = Math.random()*100 + 1; // belirtilen aralıkta rastgele sayı üretir
//console.log(sonuc);