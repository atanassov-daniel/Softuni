function solve() {
    let optionBinary = document.createElement("option");
    optionBinary.value = 'binary';
    optionBinary.innerText = 'Binary';

    let optionHexadecimal = document.createElement("option");
    optionHexadecimal.value = 'hexadecimal';
    optionHexadecimal.innerText = 'Hexadecimal';

    let selectMenuTo = document.getElementById("selectMenuTo");
    selectMenuTo.innerHTML = "";
    selectMenuTo.appendChild(optionBinary);
    selectMenuTo.appendChild(optionHexadecimal);


    const toBinary = (decimal) => {
        let binaries = [];


        let quotient = Math.floor(decimal / 2);
        let remainder = decimal % 2;
        binaries.push(remainder);

        while (quotient > 0) {
            remainder = quotient % 2;
            quotient = Math.floor(quotient / 2);
            binaries.push(remainder);
        }

        document.getElementById("result").value = binaries.reverse().join('');
    };

    const toHexadecimal = (decimal) => {
        let hexRemainder = {
            0: '0',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: 'A',
            11: 'B',
            12: 'C',
            13: 'D',
            14: 'E',
            15: 'F',
            16: '10',
            17: '11',
            18: '12',
            19: '13',
            20: '14',
            21: '15',
            22: '16',
            23: '17',
            24: '18',
            25: '19'
        };

        let hexas = [];


        let quotient = Math.floor(decimal / 16);
        let decimalRemainder = decimal % 16;
        hexas.push(hexRemainder[decimalRemainder]);

        while (quotient > 0) {
            decimalRemainder = quotient % 16;
            quotient = Math.floor(quotient / 16);
            hexas.push(hexRemainder[decimalRemainder]);
        }

        document.getElementById("result").value = hexas.reverse().join('');
    };

    document.querySelector('button').addEventListener("click", () => {
        let selectedOption = document.getElementById("selectMenuTo").value;
        let input = Number(document.getElementById("input").value);
    
        if (selectedOption === "binary") {
            toBinary(input);
        } else if (selectedOption === "hexadecimal") {
            toHexadecimal(input);
        }
    });
}