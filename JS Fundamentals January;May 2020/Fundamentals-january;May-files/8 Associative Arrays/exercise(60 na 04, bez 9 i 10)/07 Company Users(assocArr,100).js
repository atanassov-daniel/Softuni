function solve(input) {
    //input.sort();

    let assocArr = {};
    for (const string of input) {
        let splitted = string.split(' -> ');
        let companyName = splitted[0];
        let employeeId = splitted[1];

        if (assocArr[companyName] === undefined) {
            assocArr[companyName] = [employeeId];
        } else {
            if (assocArr[companyName].includes(employeeId) === false) {
                assocArr[companyName].push(employeeId);
            }
        }
    }

    /*
    с това минаваха само zero тестовете, но иначе имах 0 от 100, проблема е бил в сортирането 
    в началото, а не в края както трябва, не знам защо така става, не съ го и мислил
    for (const companyName in assocArr) {
        console.log(companyName);
        assocArr[companyName].forEach(element => console.log('-- ' + element));
    }*/
    let entries = Object.entries(assocArr);
    entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (const value of entries) {
        console.log(value[0]);
        value[1].forEach(element => console.log('-- ' + element));
    }
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);

solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);