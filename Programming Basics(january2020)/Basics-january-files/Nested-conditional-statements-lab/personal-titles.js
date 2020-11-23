function solve(input) {
    let age = Number(input.shift());
    let gender = input.shift();

    let result = 0

    if(gender === "f"){         
        if (age <16) {          
            result = "Miss";    
        } else {                
            result = "Ms.";     
        }                       
    } else {                    
        if(age < 16){           
            result = "Master";  
        } else {                
            result = "Mr.";
        }
    }
    console.log(result)
}

solve([
    "12",
    "f",
    "17",
    "m",
    "25",
    "f",
    "13.5",
    "m"
])