function solve(text) {
    let arr = text[0].split('|');
    let health = 100;
    let coins = 0;
    let isWon = true;
    let roomNumber = 0;

    for (roomNumber = 0; roomNumber < arr.length; roomNumber++) {
        let currentElement = arr[roomNumber];
        let currentElementDividedInTwoParts = currentElement.split(' ');
        let firstPartOfRoomsName = currentElementDividedInTwoParts[0];
        let secondPartOfRoomsName = Number(currentElementDividedInTwoParts[1]);

        if (firstPartOfRoomsName === "potion") {
            if ((health + secondPartOfRoomsName) <= 100) {
                health += secondPartOfRoomsName;
                console.log(`You healed for ${secondPartOfRoomsName} hp.`);
            } else {
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            }
            console.log(`Current health: ${health} hp.`);

        } else if (firstPartOfRoomsName === "chest") {
            coins += secondPartOfRoomsName;
            console.log(`You found ${secondPartOfRoomsName} coins.`);
        } else {
            health -= secondPartOfRoomsName;
            if (health > 0) {
                console.log(`You slayed ${firstPartOfRoomsName}.`);
            } else {
                console.log(`You died! Killed by ${firstPartOfRoomsName}.`);
                isWon = false;
                break;
            }
        }
    }

    if (isWon === true) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    } else {
        console.log(`Best room: ${roomNumber + 1}`);
    }
}

solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);