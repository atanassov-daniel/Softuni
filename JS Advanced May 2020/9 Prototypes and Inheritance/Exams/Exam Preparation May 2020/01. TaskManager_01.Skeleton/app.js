function solve(input) {
    let taskValue = document.getElementById("task");
    let descriptionValue = document.getElementById("description");
    let dateValue = document.getElementById("date");

    if (taskValue.value === "" && descriptionValue.value === "" && dateValue.value === "") {
        return;
    }

    // document.getElementsByTagName("form")[0].removeAttribute("action");
    console.log(input);
    document.getElementById("add").addEventListener("click", function (e) {
        var a = document.getElementById("task").value;
        var b = document.getElementById("description").value;
        var c = document.getElementById("date").value;

        console.log(a, b, c);
    });

}