function calculateBMI(name, age, weight, height) {
    const obj = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Number((weight / Math.pow(height / 100, 2)).toFixed(0)),
    };

    Object.defineProperty(obj, "status", {
        value: (function (BMI) {
            if (BMI < 18.5) {
                return "underweight";
            } else if (BMI < 25) {
                return "normal";
            } else if (BMI < 30) {
                return "overweight";
            } else {
                return "obese";
            }
        })(obj.BMI),
        enumerable: true
    });

    if (obj.status === "obese") {
        obj.recommendation = "admission required";
    }

    return obj;
}

let res = calculateBMI("Peter", 29, 75, 182);
console.log(res);
let res2 = calculateBMI("Honey Boo Boo", 9, 57, 137);
console.log(res2);