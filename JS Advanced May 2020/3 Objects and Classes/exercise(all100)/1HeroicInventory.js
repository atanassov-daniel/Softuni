function solve(input) {
    let resultArr = [];

    for (const line of input) {
        let [heroName, heroLevel, arrItems] = line.split(' / ');
        heroLevel = Number(heroLevel);
        if (arrItems !== undefined) {
            arrItems = arrItems.split(', ');
            resultArr.push({
                name: heroName,
                level: heroLevel,
                items: arrItems
            });
        } else {
            resultArr.push({
                name: heroName,
                level: heroLevel,
                items: []
            });
        }
    }

    console.log(JSON.stringify(resultArr));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
solve(['Jake / 1000 / Gauss, HolidayGrenade']);