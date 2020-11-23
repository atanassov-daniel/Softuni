function matchStrings(string1, char, string2) {
    let missingLetter = 0;
    let string = "";

    for (let i = 0; i < string1.length; i++) {

        if (i > missingLetter && missingLetter > 0) {
            string += string1[i]
        }
        if (string1[i] === "_") {
            missingLetter = i;
            for (let g = 0; g <= i; g++) {
                if (string1[g] != "_") {
                    string += string1[g]
                }
                if (g === i) {
                    string += char;
                }
            }
        }
    }

    if (string === string2) {
        console.log("Matched");
    } else {
        console.log("Not Matched")
    }

}

matchStrings('Str_ng', 'I', 'Strong')