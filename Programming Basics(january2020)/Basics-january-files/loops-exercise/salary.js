function solve(input) {
    let tabs = Number(input.shift());
    let salary = Number(input.shift());
    for (let i = 0; i < tabs; i++) {
        let name = input.shift();
        if (name === "Facebook") {
            salary -= 150
        } else if (name === "Instagram") {
            salary -= 100
        } else if (name === "Reddit") {
            salary -= 50
        }

        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }
    if (salary > 0) {
        console.log(parseInt(salary))
    }
}

solve([
    "10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook",
    "3",
    "500",
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg",
    "3",
    "500",
    "Facebook",
    "Stackoverflow.com",
    "softuni.bg",

])