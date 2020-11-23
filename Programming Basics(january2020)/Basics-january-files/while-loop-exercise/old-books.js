function solve(input) {
    let bookName = input.shift();
    let libraryCapacity = Number(input.shift());
    let prompt = input.shift();
    let booksChecked = 0;
    while (prompt !== bookName) {
        if (booksChecked === libraryCapacity) {
            console.log("The book you search is not here!");
            console.log(`You checked ${booksChecked} books.`);
            break;
        }
        booksChecked++;
        prompt = input.shift();
    }
    if (prompt === bookName) {
        console.log(`You checked ${booksChecked} books and found it.`)
    }
}

solve([
    //"Troy",
    //"8",
    //"Stronger",
    //"Life Style",
    //"Troy",

    "The Spot",
    "4",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",

    //"Bourne",
    //"32",
    //"True Story",
    //"Forever",
    //"More Space",
    //"The Girl",
    //"Spaceship",
    //"Strongest",
    //"Profit",
    //"Tripple",
    //"Stella",
    //"The Matrix",
    //"Bourne",
])