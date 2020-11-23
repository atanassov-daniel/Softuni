function addItem() {
    let input = document.getElementById("newText");
    let itemsUL = document.getElementById("items");

    let li = document.createElement("li");
    li.innerText = input.value;

    let a = document.createElement("a");
    a.innerText = "[Delete]";
    a.href = "#";
    li.appendChild(a);

    let targ = "";

    a.addEventListener("click", function (e) {
        e.preventDefault(); // 'а' тага си го има за да задоволи judge-a, но го няма досадното качване най-отгоре на страницата от '#' href-a
        itemsUL.removeChild(e.target.parentElement);
    });

    itemsUL.appendChild(li);

    input.value = "";
}