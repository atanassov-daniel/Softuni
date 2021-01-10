function loop(elements, first, combinations) {

    for (let k = 0; k < elements.length; k++) {
        let str = [first];
        /* if (str.length == count) {
            continue;
        } */
        // if (k != i) 
        if (elements[k] != first) str.push(elements[k]);

        /*  for (let j = 0; j < elements.length; j++) {
             if (elements[j] != first && elements[j] != elements[k]) str.push(elements[j]);
             // str.push(elements[j]);
             // if (j != i && j !== k) {
             //      str += elements[j] + " ";
             //     // console.log(`${element} ${elements[j]}`);
             //     combinations.add(`${element} ${elements[j]}`); 
             // /

             // !!! console.log(str);
             // !!! console.log(str.length);
             // if (str.length == 3) console.log(str.join(" "));
             if (str.length == 3 || str.length == 4) combinations.add(str.join(" "));
             // str.pop();
         } */

        // console.log(str);

    }
}

function solve(input) {
    const string = input[0];
    const elements = string.split(" ");
    const count = Number(input[1]);
    // console.log(elements);
    // console.log(count);

    const combinations = new Set();

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        // console.log(element);
        // let str = [element];

        loop(elements, element, combinations);

        // console.log(str);


    }
    /* if (count != 2) console.log(combinations.size * 2);
    else console.log(combinations.size); */
    console.log(combinations.size);
}

// solve(["234 232 230", "2"]);
// за първия елемент преглеждам всички други елементи и правя комбинации с 2
solve(["109 113 234 232", "3"]);