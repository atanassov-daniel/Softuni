function solve(arr) {
    let hero = {};
    let heroesArr = [];
    let name, level;

    for (let i = 0; i < arr.length; i++) {
        let splitted = arr[i].split(' / ');
        name = splitted.shift();
        level = Number(splitted.shift());
        let items = splitted[0].split(', ')
        hero.name = name;
        hero.level = level;
        hero.items = items;
        hero.items.sort();
        heroesArr.push(hero);
        hero = {};
    }

    heroesArr.sort((a, b) => a.level - b.level);

    for (const value of heroesArr) {
        console.log(`Hero: ${value.name}`);
        console.log(`level => ${value.level}`);
        console.log(`items => ${value.items.join(', ')}`);
    }
}

solve(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"]);