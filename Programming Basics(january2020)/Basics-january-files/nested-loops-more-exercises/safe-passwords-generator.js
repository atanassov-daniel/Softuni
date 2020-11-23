function solve(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let maximum = Number(input.shift());
    let result = "";
    let isEnd = false;
    let count = 0;

    for (let first = 35; first <= 55; first++) {
        for (let second = 64; second <= 96; second++) {
            for (let x = 1; x <= a; x++) {
                for (let y = 1; y <= b; y++) {
                    result += `${String.fromCharCode(first)}${String.fromCharCode(second)}${x}${y}${String.fromCharCode(second)}${String.fromCharCode(first)}|`
                    count++;

                    if ((x == a && y == b) || count == maximum) {
                        isEnd = true;
                        break;
                    }

                    first++;
                    second++;
                    if (first > 55) {
                        first = 35
                    }
                    if (second > 96) {
                        second = 64
                    }
                }
                if (isEnd === true) {
                    break;
                }

            }
            if (isEnd === true) {
                break;
            }
        }
        if (isEnd === true) {
            break;
        }
    }
    console.log(result)
}

solve([
    2,
    3,
    10,
    20,
    50,
    10
])