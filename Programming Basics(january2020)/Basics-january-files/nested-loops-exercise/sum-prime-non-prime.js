function solve(input) {
    let command = input.shift();
    let sumPrime = 0;
    let sumNonPrime = 0;
    let divide = 0;

    while (command != "stop") {
        command = Number(command);
        if (command < 0) {
            console.log("Number is negative.");
        }
        for (let i = 2; i < command; i++) {
            if (command % command == 0 && command % 1 == 0) {
                if (command < 0) {
                } else if (command % i == 0) {
                    divide++;
                }
                if (divide > 0) {
                    sumNonPrime += command;
                    break;
                }
            } else {
                sumNonPrime++;
            }
        }
        if (divide == 0 && command > 0) {
            sumPrime += command;
            //sumNonPrime += command;
        }/* else {
            sumPrime += command;
        }*/
        divide = 0;

        command = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

solve([
    '3',
    '9',
    '0',
    '7',
    '19',
    '4',
    'stop',
    //"30",
    //"83",
    //"33",
    //"-1",
    //"20",
    //"stop",
    "0",
    "-9",
    "0",
    "stop",

])