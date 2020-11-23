function solve(input) {
    let income = Number(input.shift());
    let gpa = Number(input.shift());            //GPA = grade point average = среден успех
    let minimalWage = Number(input.shift());

    let socialScholarship = 0.35 * minimalWage;
    let gpaScholarship = gpa * 25;

    let result = 0
    let message = 0

    if (income < minimalWage && gpa > 4.50) {
        if(gpa>=5.50){
            if(socialScholarship > gpaScholarship){
                result = socialScholarship
            }else {
                result = gpaScholarship
            }
        }else{
            result = socialScholarship
        }
        message = `You get a Social scholarship ${Math.floor(result)} BGN`
    } else if (gpa >= 5.50) {
        result = gpaScholarship
        message = `You get a scholarship for excellent results ${Math.floor(result)} BGN`
    } else {
        message = "You cannot get a scholarship!"
    }

    console.log(message)
}

solve([
    //"300",
    //"5.65",
    //"420",
    "580.00",
    "5.60",
    "450.00",
    "500.00",
    "4.51",
    "500.00"
])