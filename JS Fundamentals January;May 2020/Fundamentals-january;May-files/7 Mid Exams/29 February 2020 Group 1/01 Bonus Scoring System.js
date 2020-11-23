function solve(input) {
    let studentsCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let additionalBonus = Number(input.shift());

    let maxBonus = 0;
    let maxAttendances = 0;

    for (let i = 0; i < studentsCount; i++) {

        let attendances = Number(input[i]);
        let totalBonus;
        if (lecturesCount > 0) {
            totalBonus = attendances / lecturesCount * (5 + additionalBonus);
        } else {
            totalBonus = 0;
        }


        if (totalBonus >= maxBonus) {
            maxBonus = totalBonus;
            maxAttendances = attendances;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`);
}

solve(['5', '25', '30', '12', '19', '24', '16', '20']);
solve(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18']);