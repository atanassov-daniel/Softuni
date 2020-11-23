function solve(arr) {
    let employeesArray = [];

    for (let i = 0; i < arr.length; i++) {
        let obj = { name: arr[i], personalNumber: arr[i].length };
        employeesArray.push(obj);
        //console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNumber}`);
    }

    for (const index in employeesArray) {
        console.log(`Name: ${employeesArray[index].name} -- Personal Number: ${employeesArray[index].personalNumber}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);