function solve(arr) {
    let objectsArray = [];

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i].split(' | ');

        let town = row[0];
        let latitude = parseFloat(row[1]).toFixed(2);
        let longitude = parseFloat(row[2]).toFixed(2);

        let obj = { town: town, latitude: latitude, longitude: longitude };
        objectsArray.push(obj);
        //console.log(obj);
    }

    for (const index in objectsArray) {
        console.log(objectsArray[index]);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);