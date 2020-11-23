// като получавам аргумент за пропъртито в конструктора и направяthis.argument=argument ако имам setter ще отиде в setter-a и ще се направи каквото пише в сетъра и не е нужно да правя същата проверка и като го сетвам от конструктора, защото така или иначе проверката ше се направи в сетъра

// ако в сетъра имам 'if (monitor instanceof Monitor) {this.monitor = monitor;}' => по някаква причина която не мога да си обясня това се повтаря безкрайно и се стига до Maximum call stack size exceeded

function createComputerHierarchy() {
    class Base {
        constructor(manufacturer) {
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Base {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }
    class Monitor extends Base {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }
    class Battery extends Base {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }
    class Computer extends Base {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer) {
                throw new Error("Can't instantiate abstract class directly!");
            }
            super(manufacturer);
            this.processorSpeed = processorSpeed; // the speed of the processor in GHz
            this.ram = ram; // RAM of the computer in Gigabytes
            this.hardDiskSpace = hardDiskSpace; // the hard disk space in Terabytes
        }
    }
    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;

            this.battery = battery;
            // if (battery instanceof Battery) {
            //     this.battery = battery;
            // } else {
            //     throw new TypeError("The passed in object is not of the expected instance");
            // }
        }
        set battery(battery) {
            if (battery instanceof Battery === false) {
                // this.battery = battery;
                throw new TypeError("The passed in object is not of the expected instance");
            }
            //else {
            // throw new TypeError("The passed in object is not of the expected instance");
            //}
        }
        //get battery() {
        //    return this.battery;
        //}
    }
    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);

            this.keyboard = keyboard;
            this.monitor = monitor;

            // monitor argument validity check
            // if (monitor instanceof Monitor) {
            //     this.monitor = monitor;
            // } else {
            //     throw new TypeError("The passed in object is not of the expected instance!");
            // }

            // keyboard argument validity check
            // if (keyboard instanceof Keyboard) {
            //     this.keyboard = keyboard;
            // } else {
            //     throw new TypeError("The passed in object is not of the expected instance!");
            // }
        }
        // keyboard  property  getter and setter
        set keyboard(keyboard) {
            if (keyboard instanceof Keyboard === false) {
                throw new TypeError("The passed in object is not of the expected instance!");
                // this.keyboard = keyboard;
            }
            //else {
            // throw new TypeError("The passed in object is not of the expected instance!");
            //}
        }
        //get keyboard() {
        //    return this.keyboard;
        //}

        // monitor  property  getter and setter
        set monitor(monitor) {
            if (monitor instanceof Monitor === false) {
                throw new TypeError("The passed in object is not of the expected instance!");
                // this.monitor = monitor;
            }
            //else {
            // throw new TypeError("The passed in object is not of the expected instance!");
            //}
        }
        // get monitor() {
        //     return this.monitor;
        // }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    };
}

// let classes = createComputerHierarchy();
// let Computer = classes.Computer;
// let Laptop = classes.Laptop;
// let Desktop = classes.Desktop;
// let Monitor = classes.Monitor;
// let Battery = classes.Battery;
// let Keyboard = classes.Keyboard;
// console.log(Computer);

let {
    Computer,
    Laptop,
    Desktop,
    Monitor,
    Battery,
    Keyboard
} = createComputerHierarchy();

let keyboard = new Keyboard('Logitech', 70);
let monitor = new Monitor('Benq', 28, 18);
let battery = new Battery('Energy', 3);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
let desktop = new Desktop("JAR Computers", 3.3, 8, 1, keyboard, monitor);

laptop.battery = "pesho"; // TypeError
desktop.keyboard = "gosho"; // TypeError)
desktop.monitor = "stamat"; // TypeError)

keyboard.manufacturer = "Ha";
console.log(desktop.keyboard.manufacturer === 'Ha');
monitor.manufacturer = "Ho";
console.log(desktop.monitor.manufacturer === 'Ho');
battery.manufacturer = "Hi";
console.log(laptop.battery.manufacturer === 'Hi');