function solve(input = []) {
    let objectsCollection = {};

    input.forEach(line => {
        let splitted = line.split(' ');

        if (splitted[0] === "create" && splitted[2] === "inherit") {
            objectsCollection[splitted[1]] = Object.create(objectsCollection[splitted[3]]);
        } else if (splitted[0] === "create") {
            objectsCollection[splitted[1]] = {};
        } else if (splitted[0] === "set") {
            objectsCollection[splitted[1]][splitted[2]] = splitted[3];
        } else if (splitted[0] === "print") {
            let obj = objectsCollection[splitted[1]];
            let ownProps = [];
            let inheritedProps = [];

            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    ownProps.push(`${key}:${obj[key]}`);
                } else {
                    inheritedProps.push(`${key}:${obj[key]}`);
                }
            }

            let res = '';

            if (ownProps.length > 0 && inheritedProps.length > 0) {
                res += ownProps.join(', ') + ', ';
                res += inheritedProps.join(',');
            } else if (ownProps.length > 0) {
                res += ownProps.join(', ');
            } else if (inheritedProps.length > 0) {
                res += inheritedProps.join(', ');
            }

            console.log(res);
        }
    });
}
/*
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);
// color:red
// model:new, color:red
*/

// Test 2
solve(['create pesho', 'create gosho inherit pesho', 'create stamat inherit gosho', 'set pesho rank number1', 'set gosho nick goshko', 'print stamat']); // 'nick:goshko, rank:number1\n'