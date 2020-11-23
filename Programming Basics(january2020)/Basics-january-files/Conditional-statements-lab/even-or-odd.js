function solve(input){
    let num = Number(input.shift());

    if(num % 2 == 0){
        console.log("even");
    } else {
        console.log("odd");
    }
}

solve([
    "2",
    "3",
    "25",
    "1024"
])

/*                                          |   let num = parseInt(input.shift()); 
    if(Math.abs(num % 2) === 1){            |   if(num % 2 == 0){
        console.log("odd");                 |       console.log("even");
    } else {                                |   } else {
        console.log("even");                |   console.log("odd");
    }                                       |   }
                                            |

    */
