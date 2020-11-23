function solve() {
  document.querySelector('input[type="checkbox"]').removeAttribute("disabled");

  function a(e) {
    if (document.querySelector('tr td input[type="checkbox"]').hasAttribute("checked")) {
      document.querySelector('tr td input[type="checkbox"]').removeAttribute("checked");
    } else {
      document.querySelector('tr td input[type="checkbox"]').setAttribute("checked", "");
    }
  }

  if (document.querySelectorAll('tr td input[type="checkbox"]').length === 1) {
    document.querySelector('tr td input[type="checkbox"]').addEventListener("click", a);
  }



  document.querySelectorAll("button")[0].addEventListener("click", (e) => {
    // save the user input
    let input = document.querySelectorAll('textarea[rows="5"][cols="50"]')[0].value;
    /*// check if it is empty
    if (!input) {
      return;
    }*/
    input = JSON.parse(input);

    //[{"img":"https://www.ikea.com/PIAimages/0447583_PE597395_S5.JPG","name":"Sofa","price":"259","decFactor":"0.4"},{"img":"https://cdn.jysk.ca/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/0/7011671065_3dr_sonoma.jpg","name":"Wardrobe","price":"120","decFactor":"1.2"}]

    for (const object of input) {
      let tr = document.createElement("tr");
      //<td><img src="${object.img}"></td>
      let td = document.createElement("td");
      let img = document.createElement("img");
      img.setAttribute("src", `${object.img}`);
      td.appendChild(img);
      tr.appendChild(td);
      //<td><p>${object.name}</p>
      td = document.createElement("td");
      let p = document.createElement("p");
      p.innerText = object.name;
      td.appendChild(p);
      tr.appendChild(td);
      //<td><p>${object.price}</p></td>
      td = document.createElement("td");
      p = document.createElement("p");
      p.innerText = object.price;
      td.appendChild(p);
      tr.appendChild(td);
      //<td><p>${object.decFactor}</p></td>
      td = document.createElement("td");
      p = document.createElement("p");
      p.innerText = object.decFactor;
      td.appendChild(p);
      tr.appendChild(td);
      //<td><input type="checkbox"/></td></tr>`
      td = document.createElement("td");
      let elementInput = document.createElement("input");
      elementInput.type = "checkbox";
      td.appendChild(elementInput);
      tr.appendChild(td);

      document.querySelector('table.table tbody').appendChild(tr);
    }
    document.querySelectorAll('textarea[rows="5"][cols="50"]')[0].value = "";




    document.querySelector('tr td input[type="checkbox"]').removeEventListener("click", a);


    for (const checkbox of document.querySelectorAll('tr td input[type="checkbox"]')) {
      console.log(checkbox);
      checkbox.addEventListener("click", (e) => {
        if (checkbox.hasAttribute("checked")) {
          checkbox.removeAttribute("checked");
        } else {
          checkbox.setAttribute("checked", "");
        }
      });
    }

  });


  document.querySelectorAll("button")[1].addEventListener("click", (e) => {
    let checked = document.querySelectorAll("input[checked]");

    let names = [];
    let totalPrice = 0;
    let decorationFactor = [];

    for (const checkbox of checked) {
      let current = Array.from(checkbox.parentElement.parentElement.querySelectorAll("td")).map(x => x = x.innerText).filter(x => x != "");
      //console.log(current);
      names.push(current[0]);
      totalPrice += Number(current[1]);
      decorationFactor.push(Number(current[2]));
    }



    let sumDecFactors = 0;
    for (const num of decorationFactor) {
      sumDecFactors += Number(num);
    }

    document.querySelectorAll('textarea[rows="4"][cols="50"]')[0].value = `Bought furniture: ${names.join(", ")}`;
    document.querySelectorAll('textarea[rows="4"][cols="50"]')[0].value += `\nTotal price: ${totalPrice.toFixed(2)}`;
    document.querySelectorAll('textarea[rows="4"][cols="50"]')[0].value += `\nAverage decoration factor: ${sumDecFactors/Number((decorationFactor.length||1))}`;
  });






}

/* `<tr>
    <td><img src="${object.img}"></td>
    <td><p>${object.name}</p>
    <td><p>${object.price}</p></td>
    <td><p>${object.decFactor}</p></td>
    <td><input type="checkbox"/></td></tr>`
    */