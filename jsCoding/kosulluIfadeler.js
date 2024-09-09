
let username, password;

username = "admin";
password = "1234";

let isLoggedin = (username === "admin" && password === "1234");

if(!isLoggedin) {
    //console.log("Kullanıcı adı veya şifre hatalı");
} else {
    //console.log("Giriş başarılı");
} 

/**
 * 
 * yas >= 18
 * mezuniyet == "lise"
 * veya mezuniyet == "üniversite"
 */
const fnk = (yas, mezuniyet) => {
    let ehliyet = (yas >= 18 && (mezuniyet == "lise" || mezuniyet == "üniversite")) ? "ehliyet alabilir" : "ehliyet alamaz";
    //console.log(ehliyet);
};

const kisi1 = fnk(17, "lise");
const kisi2 = fnk(22, "üniversite");
const kisi3 = fnk(18, "ilkokul");
const kisi4 = fnk(15, "üniversite");



/**
 * Bir sayının 10-50 arasında olup olmadığını kontrol eden bir fonksiyon yazınız.
 * Bir sayının pozitif tek sayı olup olmadığını kontrol eden bir fonksiyon yazınız.
 * x, y, z sayılarının büyüklük karşılaştırmasını yapan bir if/else içeren bir fonksiyon yazınız.
 * 2 vize ve 1 final notuna göre hesaplanan ortama için;
 * a. Eğer ortalama 50 ve üstündeyse geçti, değilse kaldı yazdıran bir fonksiyon yazınız.
 * b. Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
 * c. Finalden 70 alındığında ortalama 50 altında olsa bile geçebilmelidir.
 */

var between = (num) => {
    return (num >= 10 && num <= 50) ? "true" : "false";
};
console.log(between(51));

var isPositiveOdd = (num) => {
    return (num > 0 || num % 2 != 0) ? "true" : "false";
};

var compare = (x, y, z) => {
    if (x == y && y == z) {
        return `${x} = ${y} = ${z}`;
    }
    
    else if (x > y && x > z) {
        if (y > z) {
            return `${x} > ${y} > ${z}`;
        } else if (z > y){
            return `${x} > ${z} > ${y}`;
        } else {
            return `${x} > ${y} = ${z}`;
        }
    }

    else if (y > x && y > z) {
        if (x > z) {
            return `${y} > ${x} > ${z}`;
        } else if (x < z){
            return `${y} > ${z} > ${x}`;
        } else {
            return `${y} > ${x} = ${z}`;
        }
    }

    else if (z > x && z > y) {
        if (x > y) {
            return `${z} > ${x} > ${y}`;
        } else if(y > x) {
            return `${z} > ${y} > ${x}`;
        } else {
            return `${z} > ${x} = ${y}`;
        }
    }
};


var avarage = (v1, v2, f) => {
    if(Number.isInteger(v1) && v1 >= 0 && v1 <= 100 &&
       Number.isInteger(v2) && v2 >= 0 && v2 <= 100 &&
       Number.isInteger(f) && f >= 0 && f <= 100) {
        let total = ((v1 + v2)/2 )*0.4 + f*0.6;
        if (total >= 50) {
            if (f >= 50) {
                return `Geçti, Ortalama: ${total}`;
            } else {
                return `Kaldı, Final notu en az 50 olmalıdır. Final notunuz: ${f}, Ortalama: ${total}`;
            }
        } else {
            if (f >= 70) {
                return `Geçti, Ortalama: ${total}, Final notunuz: ${f}`;
            } else {
                return `Kaldı, Ortalama: ${total}`;
            }
        }
    } else {
        console.log("Parametreler 0-100 arasında tam sayılar olmalıdır.");
    }
};

