function solution() {
    let microelementsObj = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    return function manager(input) {
        if (input.includes("restock")) {
            let [, microelement, quantity] = input.split(" ");
            quantity = Number(quantity);

            microelementsObj[microelement] += quantity;
            return "Success";
        } else if (input.includes("prepare")) {
            let [, recipe, quantity] = input.split(" ");
            quantity = Number(quantity);

            if (recipe === "apple") {
                if (microelementsObj.carbohydrate < 1 * quantity) return "Error: not enough carbohydrate in stock";
                if (microelementsObj.flavour < 2 * quantity) return "Error: not enough flavour in stock";

                microelementsObj.carbohydrate -= 1 * quantity;
                microelementsObj.flavour -= 2 * quantity;
                return "Success";
            } else if (recipe === "lemonade") {
                if (microelementsObj.carbohydrate < 10 * quantity) return "Error: not enough carbohydrate in stock";
                if (microelementsObj.flavour < 20 * quantity) return "Error: not enough flavour in stock";

                microelementsObj.carbohydrate -= 10 * quantity;
                microelementsObj.flavour -= 20 * quantity;
                return "Success";
            } else if (recipe === "burger") {
                if (microelementsObj.carbohydrate < 5 * quantity) return "Error: not enough carbohydrate in stock";
                if (microelementsObj.fat < 7 * quantity) return "Error: not enough fat in stock";
                if (microelementsObj.flavour < 3 * quantity) return "Error: not enough flavour in stock";

                microelementsObj.carbohydrate -= 5 * quantity;
                microelementsObj.fat -= 7 * quantity;
                microelementsObj.flavour -= 3 * quantity;
                return "Success";
            } else if (recipe === "eggs") {
                if (microelementsObj.protein < 5 * quantity) return "Error: not enough protein in stock";
                if (microelementsObj.fat < 1 * quantity) return "Error: not enough fat in stock";
                if (microelementsObj.flavour < 1 * quantity) return "Error: not enough flavour in stock";

                microelementsObj.protein -= 5 * quantity;
                microelementsObj.fat -= 1 * quantity;
                microelementsObj.flavour -= 1 * quantity;
                return "Success";
            } else if (recipe === "turkey") {
                if (microelementsObj.protein < 10 * quantity) return "Error: not enough protein in stock";
                if (microelementsObj.carbohydrate < 10 * quantity) return "Error: not enough carbohydrate in stock";
                if (microelementsObj.fat < 10 * quantity) return "Error: not enough fat in stock";
                if (microelementsObj.flavour < 10 * quantity) return "Error: not enough flavour in stock";

                microelementsObj.protein -= 10 * quantity;
                microelementsObj.carbohydrate -= 10 * quantity;
                microelementsObj.fat -= 10 * quantity;
                microelementsObj.flavour -= 10 * quantity;
                return "Success";
            }
        } else if (input === "report") {
            return `protein=${microelementsObj.protein} carbohydrate=${microelementsObj.carbohydrate} fat=${microelementsObj.fat} flavour=${microelementsObj.flavour}`;
        }
    };
}

let manager = solution();
manager("restock flavour 50"); // Success
manager("prepare lemonade 4"); // Error: not enough carbohydrate in stock

let manager1 = solution();
manager1("restock carbohydrate 10"); // Success
manager1("restock flavour 10"); // Success
manager1("prepare apple 1"); // Success
manager1("restock fat 10"); // Success
manager1("prepare burger 1"); // Success
manager1("report"); // protein=0 carbohydrate=4 fat=3 flavour=5

let manager2 = solution();
manager2("prepare turkey 1"); // Error: not enough protein in stock
manager2("restock protein 10"); // Success
manager2("prepare turkey 1"); // Error: not enough carbohydrate in stock
manager2("restock carbohydrate 10"); // Success
manager2("prepare turkey 1"); // Error: not enough fat in stock
manager2("restock fat 10"); // Success
manager2("prepare turkey 1"); // Error: not enough flavour in stock
manager2("restock flavour 10"); // Success
manager2("prepare turkey 1"); // Success
manager2("report"); // protein=0 carbohydrate=0 fat=0 flavour=0

/* let recipesObj = {
        apple: function makeApple() {

        },
        lemonade,
        burger,
        eggs,
        turkey,
    }; */