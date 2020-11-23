function solve() {
   let buttonsAddProduct = document.querySelectorAll("div.product");
   let productTitles = Array.from(document.querySelectorAll("div.product-title")).map(x => x.innerText);
   let productPrices = Array.from(document.querySelectorAll("div.product-line-price")).map(x => Number(x.innerText));
   let checkoutButton = document.querySelectorAll("button.checkout");
   let textarea = document.querySelector("textarea");
   let bought = {};



   for (let i = 0; i < buttonsAddProduct.length; i++) {
      buttonsAddProduct[i].querySelectorAll("div.product-add")[0].querySelector("button").setAttribute("id", `${i}`);
   }

   document.querySelectorAll("div.shopping-cart")[0].addEventListener("click", (e) => {
      let target = e.target;

      if (target.getAttribute("class") === "checkout") {
         let totalPrice = 0;
         for (const price of Object.values(bought)) {
            totalPrice += price;
         }
         textarea.textContent += `You bought ${[...new Set(Object.keys(bought))].join(', ')} for ${totalPrice.toFixed(2)}.`;

         Array.from(document.querySelectorAll("button")).forEach(button => button.setAttribute("disabled",""));

      } else if (target.getAttribute("class") === "add-product") {
         let id = target.getAttribute("id");

         textarea.textContent += `Added ${productTitles[id]} for ${productPrices[id].toFixed(2)} to the cart.\n`;
         if (bought[productTitles[id]]) {
            bought[productTitles[id]] += productPrices[id];
         } else {
            bought[productTitles[id]] = productPrices[id];
         }
      }
   });
}