function solve(firstArray, secondArray) {

    for (let i = 0; i < firstArray.length; i++) {

        for (let g = 0; g < secondArray.length; g++) {

            if (firstArray[i] === secondArray[g]) {
                console.log(firstArray[i]);
            }
        }
    }
}

solve(
    ['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
)

solve(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
)