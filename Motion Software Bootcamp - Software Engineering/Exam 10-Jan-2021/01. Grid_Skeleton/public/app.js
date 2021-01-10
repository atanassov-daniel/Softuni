function loadTable(e) { // sortMethod, criteria
    const tableBody = document.querySelector("table#customers tbody");

    const arg = {
        sortMethod: null,
        criteria: null
    };
    if (e.type != "DOMContentLoaded") {
        arg.sortMethod = e.target.id.replace("th-", "");
        console.log();
        e.target.className == "desc" ? e.target.className = "asc" : e.target.className = "desc";
        arg.criteria = e.target.className;
    }

    const {
        sortMethod,
        criteria
    } = arg;
    // const sortMethod = e.target;
    // const criteria = ;

    fetch("http://localhost:3000/cars")
        .then(data => data.json())
        .then(array => {
            tableBody.innerHTML = "";
            if (sortMethod == "model" || sortMethod == "make") {
                if (criteria == "asc") array.sort((a, b) => a[sortMethod].localeCompare(b[sortMethod]));
                else if (criteria == "desc") array.sort((a, b) => b[sortMethod].localeCompare(a[sortMethod]));
            } else if (sortMethod == "year") {
                if (criteria == "asc") array.sort((a, b) => Number(a.year) - Number(b.year));
                else if (criteria == "desc") array.sort((a, b) => Number(b.year) - Number(a.year));
            }

            array.forEach(obj => {
                let html = `
                <tr id="${obj.id}">
                    <td>
                        <button class="edit" onclick="editHandler(event)">Edit</button>
                        <button class="delete" onclick="deleteHandler(event)">Delete</button>
                    </td>

                    <td>${obj.model}</td>
                    <td>${obj.year}</td>
                    <td>${obj.make}</td>
                    <td>${obj.availableColors.join(", ")}</td>
                `;

                html += "<td>"; // for the suppliers
                obj.suppliers.forEach((supplierObj, index) => {
                    html += `
                        Name: ${obj.suppliers.length > 0 ? supplierObj.name: ""}
                        <br>
                        Email: ${obj.suppliers.length > 0 ? supplierObj.email: ""}
                        <br>
                        ${index != obj.suppliers.length - 1 ? "<br>" : ""}
                    `;
                });
                html += "</td>";

                html += "</tr>";

                tableBody.innerHTML += html;
            });
        });
}

window.addEventListener("DOMContentLoaded", loadTable);

// an array of all the values - map them with trim() and see iff it includes("") като изключим suppliers-count-a -> alert -> Please fill all the fields

window.editHandler = (e) => {
    console.log("editHandler");

    document.getElementById("create/edit").textContent = "Edit Entry";

    document.getElementById("create/edit").scrollIntoView({
        behavior: "smooth"
    });
};

window.deleteHandler = (e) => {
    console.log("deleteHandler");
    const row = e.target.parentElement.parentElement;
    const url = `http://localhost:3000/cars/${row.id}`;

    fetch(url, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(mess => {
            row.remove();
            console.log("successfully removed from server");
        })
        .catch(err => console.log(err));
};

// event listeners for sorting the columns by a given criteria
const thModel = document.getElementById("th-model");
thModel.addEventListener("click", loadTable);

const thYear = document.getElementById("th-year");
thYear.addEventListener("click", loadTable);

const thMake = document.getElementById("th-make");
thMake.addEventListener("click", loadTable);

// end
const suppliersCount = document.getElementById("suppliers-count-button");
suppliersCount.addEventListener("click", (e) => {
    const suppCount = document.getElementById("supp-count").value;

    if (suppCount < 0 || suppCount.trim() == "") {
        alert("Invalid supplier count");
        return;
    }

    const supplierTemplate = `<div class="supplier">
        <label for="name">Supplier i Name</label>
        <input type="text" style="display: block;">

        <label for="email">Supplier i Email</label>
        <input type="text" style="display: block;">
    </div>`;

    for (let index = 0; index < suppCount; index++) {
        document.getElementById("suppliers").innerHTML +=
            `<div class="supplier">
                <label for="name">Supplier ${index} Name</label>
                <input type="text" class="supplier-name" style="display: block;">

                <label for="email">Supplier ${index} Email</label>
                <input type="text" class="supplier-email" style="display: block;">
            </div>`;
    }

    e.preventDefault();

    console.log("suppliers count clicked");

    // document.getElementById("suppliers-element").style.display = "none";
});