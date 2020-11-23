// решение 2(подобрено и съкратено):
function solution() {
    let string = ""; // така потребителят няма как да го достъпи и да го промени, а може да използва само долните методи

    return {
        append: (str) => string += str,
        removeStart: (n) =>
            string = string.substring(n),
        removeEnd: (n) =>
            string = string.substring(0, string.length - n),
        print: () => console.log(string)
    };
}

/*
let firstZeroTest = solution();
console.log(firstZeroTest);
firstZeroTest.append('hello');
console.log(firstZeroTest);
firstZeroTest.append('again');
console.log(firstZeroTest);
firstZeroTest.removeStart(3);
console.log(firstZeroTest);
firstZeroTest.removeEnd(4);
console.log(firstZeroTest);
*/
let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

// решение 1:
function solution2() {
    return {
        string: "",
        append(str) {
            this.string += str;
            return this.string;
        },
        removeStart(n) {
            let substr = this.string.substring(0 + n);
            this.string = substr;
            return this.string;
        },
        removeEnd(n) {
            let substr = this.string.substring(0, this.string.length - n);
            this.string = substr;
            return this.string;
        },
        print() {
            console.log(this.string);
        }
    };
}