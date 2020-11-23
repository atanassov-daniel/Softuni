function solve() {
    return {
        extend: function (template) {
            for (const key in template) {
                if (typeof template[key] === "function") {
                    Object.getPrototypeOf(this)[key] = template[key];
                } else {
                    this[key] = template[key];
                }
            }
        }
    };
}

let obj = solve();
obj.extend({
    extensionMethod: function () {},
    extensionProperty: 'someString'
});

console.log(obj);
console.log(Object.getPrototypeOf(obj));