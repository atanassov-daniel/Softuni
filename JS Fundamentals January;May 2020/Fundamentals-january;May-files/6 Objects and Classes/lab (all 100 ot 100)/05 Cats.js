function solve(arr) {

    class Cat {
        constructor(name, age) {
            this.nameCat = name;
            this.age = age;
            this.meow = function () {
                console.log(`${name}, age ${age} says Meow`);
            };
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let currentElementSplitted = arr[i].split(' ');
        let name = currentElementSplitted[0];
        let age = currentElementSplitted[1];

        let cat = new Cat(name, age);

        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);