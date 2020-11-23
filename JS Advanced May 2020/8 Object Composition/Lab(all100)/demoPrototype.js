let a = {
    name: "string",
    num: 10000
};

let myObj = Object.create(a);

myObj.extend = function () {
    console.log('empty string');
};

let prototype = Object.getPrototypeOf(myObj);
console.log(prototype);
prototype.asd = "123";
console.log(prototype);
console.log(Object.getPrototypeOf(myObj));