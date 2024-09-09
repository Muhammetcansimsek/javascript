let url = 'https://www.sadikturan.com/';
let courseName = 'Modern JavaScript Kursu';
let result;
/**
* URL kaç karakterlidir?
result = url.length;
console.log(result); 
*/

/**
* Kurs adı kaç kelimeden oluşmaktadır?
result = courseName.split(' ').length;
console.log(result); 
 */

/**
 * URL 'https' ifadesini içeriyor mu?
result = url.includes('https');
console.log(result);
*/

/**
 * courseName, içerisinde Kursu kelimesi geçiyor mu?
 
result = courseName.includes('Kursu');
console.log(result);
*/

/**
 * URL ve courseName değişkenlerini birleştirerek aşağıdaki string'i oluşturun.
 * https://www.sadikturan.com/modern-javascript-kursu
 *
   courseName = courseName.toLowerCase();
   //console.log(courseName);

   result = url + courseName.replace(/\s+/g, '-');
   console.log(result);
 */