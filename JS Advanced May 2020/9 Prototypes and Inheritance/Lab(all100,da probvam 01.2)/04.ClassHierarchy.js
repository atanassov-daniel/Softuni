function solve() {
    class Figure {
        constructor() {
            this.unit = "cm";
        }
        changeUnits(unit) {
            if (["m", "cm", "mm"].includes(unit)) {
                this.unit = unit;
            }
        }
    }

    class Circle extends Figure {
        constructor(r) {
            super();
            this.radius = r;
        }

        get area() {
            let area = Math.PI * this.radius * this.radius;
            if (this.unit === "mm") {
                area *= 100;
            } else if (this.unit === "m") {
                area /= 10000;
            }
            return area;
        }

        toString() {
            let radius = this.radius;
            if (this.unit === "mm") {
                radius *= 10;
            } else if (this.unit === "m") {
                radius /= 100;
            }
            return `Figures units: ${this.unit} Area: ${this.area} - radius: ${radius}`;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, unit) {
            super();
            this.width = width;
            this.height = height;
            this.unit = unit;
        }

        get area() {
            let area = this.width * this.height;
            if (this.unit === "mm") {
                area *= 100;
            } else if (this.unit === "m") {
                area /= 10000;
            }
            return area;
        }
        toString() {
            let width = this.width;
            let height = this.height;
            if (this.unit === "mm") {
                width *= 10;
                height *= 10;
            } else if (this.unit === "m") {
                width /= 100;
                height /= 100;
            }
            return `Figures units: ${this.unit} Area: ${this.area} - width: ${width}, height: ${height}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    };
}

let classes = solve();
let Figure = classes.Figure;
let Circle = classes.Circle;
let Rectangle = classes.Rectangle;

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50