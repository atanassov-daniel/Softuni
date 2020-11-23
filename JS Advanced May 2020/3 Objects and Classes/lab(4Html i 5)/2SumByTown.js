function solve(input) {
    let assocArr = {};

    for (let index = 0; index < input.length; index += 2) {
        let townName = input[index];
        let income = Number(input[index + 1]);

        if (assocArr[townName] === undefined) {
            assocArr[townName] = income;
        } else {
            assocArr[townName] += income;
        }
    }

    console.log(JSON.stringify(assocArr));
}

solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);
solve(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'varna', '4']);