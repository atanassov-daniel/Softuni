function solve(input) {
    let width = Number(input.shift());
    let length = Number(input.shift());
    const area = width * length;
    const pieceSize = 1 * 1;
    let piecesCount = area / pieceSize;
    let piecesTaken = 0
    let command = 0;
    while (piecesTaken <= piecesCount) {
        let command = input.shift();
        if (command !== "STOP") {
            command = Number(command);
            piecesTaken += command;
        } else {
            break;
        }
    }
    let piecesLeft = Math.abs(piecesCount - piecesTaken);
    if (piecesTaken <= piecesCount) {
        console.log(`${piecesLeft} pieces are left.`)
    } else {
        console.log(`No more cake left! You need ${piecesLeft} pieces more.`)
    }
}

solve([
    //"10",
    //"10",
    //"20",
    //"20",
    //"20",
    //"20",
    //"21",
    "10",
    "2",
    "2",
    "4",
    "6",
    "STOP",
])