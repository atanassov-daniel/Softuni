function solve(input) {
    let tic = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let xHasWon;
    let oHasWon;

    for (let i = 0; i < input.length; i++) {
        let [row, cell] = input[i].split(' ');
        row = Number(row);
        cell = Number(cell);

        if (i === 0) {
            tic[row][cell] = 'X';
            last = 'X';
        } else {
            if (last === 'X') {
                if (tic[row][cell] === false) {
                    tic[row][cell] = 'O';
                    last = 'O';
                } else if (tic[row][cell] !== false && i !== input.length - 1) {
                    console.log(`This place is already taken. Please choose another!`);

                    [row, cell] = input[i + 1].split(' ');
                    row = Number(row);
                    cell = Number(cell);

                    tic[row][cell] = 'O';
                    last = 'O';
                    i++;
                }

            } else if (last === 'O') {
                if (tic[row][cell] === false) {
                    tic[row][cell] = 'X';
                    last = 'X';
                } else if (tic[row][cell] !== false && i !== input.length - 1) {
                    console.log(`This place is already taken. Please choose another!`);

                    [row, cell] = input[i + 1].split(' ');
                    row = Number(row);
                    cell = Number(cell);

                    tic[row][cell] = 'X';
                    last = 'X';
                    i++;
                }
            }
        }

        xHasWon = false;
        oHasWon = false;

        // check if there is a row of all the same things
        for (const line of tic) {
            if (line[0] === 'X' && line[1] === 'X' && line[2] === 'X') {
                xHasWon = true;
                break;
            } else if (line[0] === 'O' && line[1] === 'O' && line[2] === 'O') {
                oHasWon = true;
                break;
            }
        }

        //check for a column
        for (const index in tic) {
            if (tic[0][index] === 'X' && tic[1][index] === 'X' && tic[2][index] === 'X') {
                xHasWon = true;
                break;
            } else if (tic[0][index] === 'O' && tic[1][index] === 'O' && tic[2][index] === 'O') {
                oHasWon = true;
                break;
            }
        }

        // check for the diagonals
        if ((tic[0][0] === 'X' && tic[1][1] === 'X' && tic[2][2] === 'X') || (tic[0][2] === 'X' && tic[1][1] === 'X' && tic[2][0] === 'X')) {
            xHasWon = true;
        } else if ((tic[0][0] === 'O' && tic[1][1] === 'O' && tic[2][2] === 'O') || (tic[0][2] === 'O' && tic[1][1] === 'O' && tic[2][0] === 'O')) {
            oHasWon = true;
        }

        // if someone has won print that he has won and then the tic-tac-toe as wanted in the task
        if (xHasWon === true) {
            console.log(`Player X wins!`);
            tic.forEach(line => console.log(line.join('\t')));
            break;
        } else if (oHasWon === true) {
            console.log(`Player O wins!`);
            tic.forEach(line => console.log(line.join('\t')));
            break;
        }

        if (i === input.length - 1 && xHasWon === false && oHasWon === false) {
            console.log(`The game ended! Nobody wins :(`);
            tic.forEach(line => console.log(line.join('\t')));
        }
    }
}

/*solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
]);*/
solve(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"
]);
/*solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"
]);*/