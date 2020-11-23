(function () {
    String.prototype.ensureStart = function (str) {
        let string = this.toString();
        if (!string.startsWith(str)) {
            string = str + string;
        }
        return string;
    };

    String.prototype.ensureEnd = function (str) {
        let string = this.toString();
        if (!string.endsWith(str)) {
            string = string + str;
        }
        return string;
    };

    String.prototype.isEmpty = function () {
        return this.toString() === '';
    };

    String.prototype.truncate = function (n) {
        let string = this.toString();

        if (n >= string.length) {
            return string;
        } else if (n < 4) {
            return '.'.repeat(n);
        } else if (!string.includes(' ')) {
            string = string.substring(0, n - 3) + '...';
            return string;
        } else {
            string = string.substring(0, n).trim();
            if (string.includes(' ')) {
                string = string.substring(0, string.lastIndexOf(' ')) + '...';
            }
            return string;
        }
    };

    String.format = function (startString, ...parameters) {
        for (const index in parameters) {
            startString = startString.replace(`{${Number(index)}}`, parameters[index]);
        }
        return startString;
    };
})();

// Test 5
let str = 'the quick brown fox jumps over the lazy dog';
console.log(str.length);
console.log(str.truncate(10));
console.log(str.truncate(43));

/* example from the document:

let str = 'my string';
str = str.ensureStart('my'); // 'my string' // 'my' already present
str = str.ensureStart('hello '); // 'hello my string'
str = str.truncate(16); // 'hello my string' // length is 15

str = str.truncate(14); // 'hello my...' // length is 11
str = str.truncate(8); // 'hello...'
str = str.truncate(4); // 'h...'
str = str.truncate(2); // '..'
str = String.format('The {0} {1} fox', 'quick', 'brown'); // 'The quick brown fox'
str = String.format('jumps {0} {1}', 'dog'); // 'jumps dog {1}' // no parameter at 1
*/