function solve(input) {
    //let arr = JSON.parse(input[0]);

    let html = '<table>';

    // copy the const key and do the keys row then down there use Object.values()
    html += `\n   <tr>`;
    for (const key of Object.keys(input[0])) {
        html += `<th>${key}</th>`;
    }
    html += `</tr>`;

    //const index in arr
    for (const index in input) {
        let object = input[index];

        html += `\n   <tr>`;

        for (const key of Object.keys(object)) {
            if (typeof object[key] == "string") {
                object[key] = object[key].replace(/&/g, '&amp;');
                object[key] = object[key].replace(/</g, '&lt;');
                object[key] = object[key].replace(/>/g, '&gt;');
                object[key] = object[key].replace(/"/g, '&quot;');
                object[key] = object[key].replace(/'/g, '&#39;');
            }

            html += `<td>${object[key]}</td>`;
        }

        html += `</tr>`;

    }

    html += '\n</table>';

    console.log(html);
}

//solve(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
solve([{
    "Name": "Pesho <div>-a",
    "Age": 20,
    "City": "Sofia"
}, {
    "Name": "Gosho",
    "Age": 18,
    "City": "Plovdiv"
}, {
    "Name": "Angel",
    "Age": 18,
    "City": "Veliko Tarnovo"
}]);
/*
function solve(input) {
    let arr = JSON.parse(input[0]);

    let html = '<table>';

    for (const object of arr) {
        console.log(object);
        let [name, price] = Object.values(object);
        name = name.replace(/&/g, '&amp;');
    }
}
*/




/*
function solve2(input) {
    for (const object of input) {
        console.log(object);
        let [name, price] = Object.values(object);
        //console.log(name);
        name = name.replace(/&/, '&amp;');
        // console.log(name);
    }
}

solve2([{
    "Name": "Tomatoes & Chips",
    "Price": 2.35
}, {
    "Name": "J&B Chocolate",
    "Price": 0.96
}]);
*/