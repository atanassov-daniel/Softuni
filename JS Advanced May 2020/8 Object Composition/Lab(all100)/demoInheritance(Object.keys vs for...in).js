function ParentClass() {}
ParentClass.prototype.inheritedMethod = function () {};

function ChildClass() {
    this.prop = 5;
    this.method = function () {};
}
ChildClass.prototype = new ParentClass;
ChildClass.prototype.prototypeMethod = function () {};

console.log(
    Object.getOwnPropertyNames(
        new ChildClass() // ["prop", "method"]
    )
);

console.log(
    Object.keys(new ChildClass()) // ["prop", "method"]
);


const obj = new ChildClass();

for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key);
    } else {
        console.log("inherited      " + key);
    }
}
// prop
// method
// inherited      prototypeMethod
// inherited      inheritedMethod


console.log(Object.entries(obj)); // [ [ 'prop', 5 ], [ 'method', [Function] ] ]