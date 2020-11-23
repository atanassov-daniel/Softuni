function solve() {
    const objectTypes = {};

    [...arguments].forEach(arg => {
        const type = typeof arg;

        if (type === "object" && Array.isArray(arg) === false && arg !== null) {
            console.log(`${type}: `);

            if (objectTypes.string) {
                objectTypes.string++;
            } else {
                objectTypes.string = 1;
            }
            return;
        } else if (type === "function") {
            console.log(`${type}: ${arg.toString()}`);
        } else {
            console.log(`${type}: ${arg}`);
        }

        if (objectTypes[type]) {
            objectTypes[type]++;
        } else {
            objectTypes[type] = 1;
        }
    });

    for (const kvp of Object.entries(objectTypes).sort((kvp1, kvp2) => Number(kvp2[1]) - Number(kvp1[1]))) {
        console.log(`${kvp[0]} = ${kvp[1]}`);
    }
}

/* solve('cat',
    42,
    function () {
        console.log('Hello world!');
    }
); */

solve({
    name: 'bob'
}, 3.333, 9.999);

/* 
string: cat
number: 42
function: function () { console.log('Hello world!'); }
string = 1
number = 1
function = 1 
*/