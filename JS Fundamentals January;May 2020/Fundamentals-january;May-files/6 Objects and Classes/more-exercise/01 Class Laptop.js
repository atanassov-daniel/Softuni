class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
        this.isOn = false;

        this.price = 800 - info.age * 2 + (quality * 0.5);
    }

    turnOn() {
        this.isOn = true;
        this.quality--;
        this.price -= 0.5;
    }

    turnOff() {
        this.isOn = false;
        this.quality--;
        this.price -= 0.5;
    }

    showInfo() {
        return JSON.stringify(this.info);
    }
}

let info = { producer: "Dell", age: 2, brand: "XPS" };
let laptop = new Laptop(info, 10);
laptop.turnOn();
console.log(laptop.showInfo());
laptop.turnOff();
console.log(laptop.quality);
laptop.turnOn();
console.log(laptop.isOn);
console.log(laptop.price);