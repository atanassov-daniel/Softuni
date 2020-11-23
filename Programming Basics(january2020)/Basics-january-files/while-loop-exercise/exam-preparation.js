function solve(input) {
    let gradesNotToPass = Number(input.shift());
    let isEnough = false;
    let unsatisfyingGrades = 0
    let name = 0;
    let grade = 0;
    let gradeSum = 0;
    let gradeCount = 0;
    let lastProblem = "";
    while (unsatisfyingGrades < gradesNotToPass) {
        name = input.shift();
        if(name!=="Enough"){
            lastProblem=name
        }
        if (name === "Enough") {
            isEnough = true;
            break;
        } else {
            grade = Number(input.shift());
            gradeSum += grade;
            gradeCount++;
        }

        if (grade <= 4.00) {
            unsatisfyingGrades++
        }
    }
    if (isEnough === true) {
        console.log(`Average score: ${(gradeSum / gradeCount).toFixed(2)}`)
        console.log(`Number of problems: ${gradeCount}`);
        console.log(`Last problem: ${lastProblem}`)
    } else {
        console.log(`You need a break, ${unsatisfyingGrades} poor grades.`)
    }
}

solve([
    "3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough",
    //"2",
    //"Income",
    //"3",
    //"Game Info",
    //"6",
    //"Best Player",
    //"4",

])