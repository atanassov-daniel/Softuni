function validatePassword(password) {
    let validityConditions = 0;
    let isValid = false;

    if (password.length >= 6 && password.length <= 10) { // това е за дължината
        validityConditions++;
        isValid = true;
    } else {
        console.log('Password must be between 6 and 10 characters');
    }

    let digitsCount = 0;

    for (let i = 0; i < password.length; i++) {

        if ((password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 122) || (Number.isNaN(Number(password[i])) === false && typeof Number(password[i]) === "number")) {
            //console.log(password.charCodeAt(i));
            //console.log(typeof Number(password[i]));
            isValid = true;
        } else {
            console.log('Password must consist only of letters and digits');
            isValid = false;
            break;
        }

        if (Number.isNaN(Number(password[i])) === false && typeof Number(password[i]) === "number") {
            digitsCount++;
        }
    }

    if (isValid === true) { //това е за само числа и букви
        validityConditions++;
    }

    if (digitsCount >= 2) { // това е за поне 2 числа
        validityConditions++;
    } else {
        console.log('Password must have at least 2 digits');
    }

    if (validityConditions === 3) {
        console.log('Password is valid');
    }
}

validatePassword('logIn');
validatePassword('MyPass123');
validatePassword('Pa$s$s');