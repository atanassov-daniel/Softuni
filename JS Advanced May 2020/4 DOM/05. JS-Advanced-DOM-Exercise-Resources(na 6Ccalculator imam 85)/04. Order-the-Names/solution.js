function solve() {
    document.getElementsByTagName("button")[0].addEventListener("click", function () {
        let alphabet = "abcdefghijklmnopqrstuvwxyz";

        let listItems = document.getElementsByTagName("li");

        let nameToAdd = document.getElementsByTagName("input")[0].value;

        if (!nameToAdd) {
            return;
        }

        let firstLetter = nameToAdd.toLowerCase()[0];

        let indexListItem = alphabet.indexOf(firstLetter);
        // ЧОВЕКА НА ЛЕКЦИЯТА КАЗА, ЧЕ СЕ ИСКА ИМЕНАТА ДА СА С ПЪРВА ГЛАВНА БУКВА И ВСИЧКИ ДРУГИ МАЛКИ, НО ТОВА НЕ ГО ПИШЕШЕ В УСЛОВИЕТО
        nameToAdd = nameToAdd.substring(0, 1).toUpperCase() + nameToAdd.substring(1).toLowerCase();
        // ТАКА ЧЕ АКО НЕ БЕШЕ ГО КАЗАЛ, НЯМАШЕ ДА ИМАМ 100, А 20 ТОЧКИ
        if (listItems[indexListItem].innerText === "") {
            listItems[indexListItem].innerText = nameToAdd;
        } else {
            listItems[indexListItem].innerText += `, ${nameToAdd}`;
        }

        // ТОВА Е ЗА АКО ТРЯБВА ДА СЕ СОРТИРАТ НА ВСЯКО ИМЕ, НО СЕ ОКАЗА ЧЕ НЕ ТРЯБВА
        //listItems[indexListItem].innerText = listItems[indexListItem].innerText.split(', ').sort().join(', ');

        document.getElementsByTagName("input")[0].value = "";
    });
}