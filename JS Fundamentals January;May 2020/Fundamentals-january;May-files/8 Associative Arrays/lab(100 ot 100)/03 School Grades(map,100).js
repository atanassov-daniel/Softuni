function solve(input) {
    let studentsMap = new Map();

    for (const value of input) {
        let splitted = value.split(' ');
        let studentName = splitted.shift();
        let gradesArr = splitted.map(Number);

        if (studentsMap.has(studentName) === false) {
            studentsMap.set(studentName, gradesArr);
            // ако пак се сложи същото, стойността му се презаписва
        } else {
            let grades = studentsMap.get(studentName);
            grades.push(...gradesArr);
            studentsMap.set(studentName, grades);
        }
    }

    let arr = Array.from(studentsMap.entries());

    let average = function (a, b) {
        let sumA = 0;
        for (const grade of a[1]) {
            sumA += grade;
        }
        let averageA = sumA / a[1].length;

        let sumB = 0;
        for (const grade of b[1]) {
            sumB += grade;
        }
        let averageB = sumB / b[1].length;

        return averageA - averageB;
    };

    arr.sort(average);

    for (const kvp of arr) {
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);
    }
}

solve([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);