function solve(input) {
    "editor.semanticHighlighting.enabled: true"

    let studentsCount = Number(input.shift());
    let total = 0;
    let first = 0;
    let second = 0;
    let third = 0;
    let fourth = 0;

    for (let i = 0; i < studentsCount; i++) {
        let grade = Number(input.shift());
        total += grade

        if (grade <= 2.99) {
            first++;
        } else if (grade <= 3.99) {
            second++;
        } else if (grade <= 4.99) {
            third++;
        } else {
            fourth++;
        }
    }
    let average = total / studentsCount;
    let fourthP = fourth / studentsCount * 100;
    let thirdP = third / studentsCount * 100;
    let secondP = second / studentsCount * 100;
    let firstP = first / studentsCount * 100;
    console.log(`Top students: ${fourthP.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${thirdP.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${secondP.toFixed(2)}%`);
    console.log(`Fail: ${firstP.toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);
}

solve([
    "10",
    "3.00",
    "2.99",
    "5.68",
    "3.01",
    "4",
    "4",
    "6.00",
    "4.50",
    "2.44",
    "5",

])