let obj1 = {
    a: 10,
    b: {
        c: 12
    },
    d: "abcd",
    e: true,
    f: [1, 2, 3]
};
let obj2 = {
    a: 10,
    b: {
        c: 12
    },
    d: "abcd",
    e: true,
    f: [1, 2, 3]
};

// https://www.samanthaming.com/tidbits/33-how-to-compare-2-objects/ :

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true // it also works for deep nested objects, the order matters
console.log(Object.entries(obj1).toString() == Object.entries(obj2).toString()); // true // it won’t work with nested objects and the order of the keys are important