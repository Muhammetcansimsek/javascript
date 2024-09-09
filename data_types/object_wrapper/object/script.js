let result="";
let user1 = {
    "name": "John",
    "surname": "Doe",
    "age": 25,
    "email": "example-email@gmail.com",
    "address": {
        "city": "New York",
        "street": "Broadway",
        "postalCode": 10001,
        "country": "USA",
    }
};


for(let key in user1) {
    if(typeof user1[key] === 'object') {
        for(let item in user1[key]) {
            result += item + ": " + user1[key][item] + ",\n";
        }
    } else {
        result += key + ": " + user1[key] + ",\n";
    }
}

console.log(
    result,
    user1,
);