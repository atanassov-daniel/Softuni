function solve(input) {
    // TODO за 0 и може би за 1

    let n = Number(input.shift());
    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;

    let forI = Number((n / 2).toFixed(0));

    for (let i = 1; i <= forI; i++) {
        let a = Number(input.shift());
        oddSum += a
        if(i === 1){
            oddMin = a
        }
        if(i === 1){
            oddMax = a
        }
        if (a < oddMin) {
            oddMin = a
        } else if (a > oddMax) {
            oddMax = a
        }
    
        if (i < forI || (i === forI && n % 2 === 0)) {
            let b = Number(input.shift());
            evenSum += b
            if(i === 1){
                evenMin = b
            }
            if(i === 1){
                evenMax = b
            }

            if (b < evenMin) {
                evenMin = b
            } else if (b > evenMax) {
                evenMax = b
            }
        }
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`);

    if(oddMin === Number.MAX_SAFE_INTEGER){
        console.log("OddMin=No,");
    }else{
        console.log(`OddMin=${oddMin.toFixed(2)},`);
    }

    if(oddMax === Number.MIN_SAFE_INTEGER){
        console.log("OddMax=No,");
    }else{
        console.log(`OddMax=${oddMax.toFixed(2)},`);
    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`);

    if(evenMin === Number.MAX_SAFE_INTEGER){
        console.log("EvenMin=No,");
    }else{
        console.log(`EvenMin=${evenMin.toFixed(2)},`);
    }

    if(evenMax === Number.MIN_SAFE_INTEGER){
        console.log("EvenMax=No");
    }else{
        console.log(`EvenMax=${evenMax.toFixed(2)}`);
    }
}

solve([
    "1",
    "1"
])
