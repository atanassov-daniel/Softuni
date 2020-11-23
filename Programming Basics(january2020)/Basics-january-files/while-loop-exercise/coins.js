function solve(input) {
    //let oneStotinki = 0.01;
    //let twoStotinki = 0.02;
    //let fiveStotinki = 0.05;
    //let tenStotinki = 0.10;
    //let twentyStotinki = 0.20;
    //let fiftyStotinki = 0.50;
    //let oneLeva = 1;
    //let twoLeva = 2;
    let total = 0;
    let sum = input.shift();
    let count = 0;
    let name = "";
    while (total < sum  && count < sum.length ) {
        name = sum;
        sum = Number(sum)
        if (count !== 1) {
            if (name[0] === 1) {
                total += 1;
            } else if (name[0] === 2) {
                total += 2
            } else if (name[0] === 0) {
                total += 0
            }
            if(name[2] === 1){
                
            }
        }
        count++
    }
    console.log(total)
}

solve([
    "1.23",
    "2",
    "0.56",
    "2.73",
])
