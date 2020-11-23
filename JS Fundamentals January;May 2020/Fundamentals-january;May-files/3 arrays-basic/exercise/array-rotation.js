function solve(array, rotations) {
    //let newArray = [];

    for (let i = 0; i < rotations; i++) {
        let element = array.shift();
        array.push(element);
    }
    // почвам новата отзад напред и след това от индекса(как точно трябва да стане, да го обърна ли трябва) добавям останалите елементи до .length

    console.log(array.join(' '));
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);
