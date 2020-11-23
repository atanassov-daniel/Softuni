function addItem() {
    let selectMenu = document.getElementById('menu');

    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');

    let option = document.createElement('option');
    option.value = newItemValue.value;
    option.innerText = newItemText.value;

    selectMenu.appendChild(option);

    newItemText.value = "";
    newItemValue.value = "";
}