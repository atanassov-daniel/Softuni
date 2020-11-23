function solve(input) {
    let income = Number(input.shift());
    let gpa = Number(input.shift());            //GPA = grade point average = среден успех
    let minimalWage = Number(input.shift());

    let socialScholarship = 0.35 * minimalWage;
    let gpaScholarship = gpa * 25;

    let result = 0
    let message = 0
    /*if(income < minimalWage) {
        if (gpa > 4.5){
            socialScholarship = 0.35 * minimalWage;
        } 
        }
    if (gpa >= 5.5) {
        gpaScholarship = gpa * 25;
    }*/

    if (gpa >= 5.5) {
        if (income < minimalWage) {
            socialScholarship = 0.35 * minimalWage;
            if (gpaScholarship > socialScholarship) {
                result = gpaScholarship
                message = `You get a scholarship for excellent results ${Math.floor(result)} BGN`
            } else if (gpaScholarship < socialScholarship) {
                result = socialScholarship
                message = `You get a Social scholarship ${Math.floor(result)} BGN`
            } else {
                result = gpaScholarship
                message = `You get a scholarship for excellent results ${Math.floor(result)} BGN`
            }
        } else {
            result = gpaScholarship
            message = `You get a scholarship for excellent results ${Math.floor(result)} BGN`
        }
    } else if (gpa > 4.5) {
        if (income < minimalWage) {
            result = socialScholarship
            message = `You get a Social scholarship ${Math.floor(result)} BGN`
        } else {
            message = "You cannot get a scholarship!"
        }
    } else {
        message = "You cannot get a scholarship!"
    }
    console.log(message)
}

solve([
    "580.00",
    "5.60",
    "450.00",
    "500.00",
    "3.51",
    "500.00"
])