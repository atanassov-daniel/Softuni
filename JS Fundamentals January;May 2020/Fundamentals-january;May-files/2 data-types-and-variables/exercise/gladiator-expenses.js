function calculateExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let helmetsCount = 0;
    let swordsCount = 0;
    let shieldsCount = 0;
    let armoursCount = 0;
    let isBrokenSword = false;
    let isBrokenHelmet = false;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            isBrokenHelmet = true;
            helmetsCount++;
        } else {
            isBrokenHelmet = false;
        }

        if (i % 3 === 0) {
            isBrokenSword = true;
            swordsCount++;
        } else {
            isBrokenSword = false;
        }

        if (isBrokenSword === true && isBrokenHelmet === true) {
            shieldsCount++;
            if (shieldsCount !== 0 && shieldsCount % 2 === 0) {
                armoursCount++;
            }
        }
    }

    let expenses = helmetsCount * helmetPrice + swordsCount *
        swordPrice + shieldsCount * shieldPrice + armoursCount * armourPrice;

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

calculateExpenses(
    //7,
    //2,
    //3,
    //4,
    //5,
    23,
    12.50,
    21.50,
    40,
    200
)