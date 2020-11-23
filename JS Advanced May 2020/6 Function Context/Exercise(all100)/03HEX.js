class Hex {
    constructor(value) {
        this.value = value;
    }
    valueOf() {
        return this.value;
    }
    toString() {
        return "0x" + this.value.toString(16).toUpperCase();
    }
    plus(newInstance) {
        return new Hex(this.value + newInstance.value);
    }
    minus(newInstance) {
        return new Hex(this.value - newInstance.value);
    }
    parse(hexadecimal) {
        return parseInt(decimal, 16);
    }
}

let FF = new Hex(255);
let actual = FF.toString();
console.log(actual); // "0xFF"
assert.equal(FF.valueOf() + 1, 256);
let a = new Hex(10);
let b = new Hex(5);
let act = a.plus(b).toString();
console.log(act); // "0xF"