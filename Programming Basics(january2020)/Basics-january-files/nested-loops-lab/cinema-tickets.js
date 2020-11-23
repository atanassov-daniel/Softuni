function solve(input) {
    let filmName = input.shift();
    let ticketType = 0;
    let ticketsBought = 0;
    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    let freeSeats = 0;
    let isEnd = false

    while (filmName != "Finish") {
        freeSeats = Number(input.shift());

        while (ticketsBought <= freeSeats) {
            if (ticketType == "End") {
                isEnd = true;
                break;
            }
            ticketType = input.shift();
            if (ticketType == "End") {
                isEnd = true;
                break;
            }
            switch (ticketType) {
                case "student":
                    studentTickets += 1;
                    break;
                case "standard":
                    standardTickets += 1;
                    break;
                case "kid":
                    kidTickets += 1;
                    break;
            }
            ticketsBought++;
        }

        console.log(`${filmName} - ${(ticketsBought / freeSeats * 100).toFixed(2)}% full.`);
        totalTickets += ticketsBought;
        ticketsBought = 0;//важно е май
        filmName = input.shift();
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${studentTickets / totalTickets}% student tickets.`);
    console.log(`${standardTickets / totalTickets}% standard tickets.`);
    console.log(`${kidTickets / totalTickets}% kids tickets.`);
}
//freeSeats != 0 || filmName == "End"
solve([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish",
])