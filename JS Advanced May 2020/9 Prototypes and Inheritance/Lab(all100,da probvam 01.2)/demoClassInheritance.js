class Foo {
    constructor(who) {
        this.me = who;
    }
    identify() {
        return "I am " + this.me;
    }
}

class Bar extends Foo {
    constructor(who) {
        super(who);
    }
    speak() {
        console.log("Hello, " + this.identify() + ".");
    }
}

let b1 = new Bar("b1");
b1.speak(); // Hello, I am b1.