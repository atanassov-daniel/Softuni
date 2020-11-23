function deleteByEmail() {
    let input = document.querySelectorAll('input[type="text"][name="email"]')[0];
    let result = document.getElementById("result");


    let emailsTD = Array.from(document.querySelectorAll("td")).filter((value, index) => Number(index) % 2 !== 0);

    let indexEmail = emailsTD.map(x => x.innerText).indexOf(input.value);
    if (indexEmail !== -1) {
        let tableRow = emailsTD[indexEmail].parentElement;
        let table = tableRow.parentElement;
        table.removeChild(tableRow);
        result.innerText = "Deleted.";
    } else {
        result.innerText = "Not found.";
    }
}