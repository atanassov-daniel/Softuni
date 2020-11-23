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
        ticketType=input.shift();
        while (ticketType != "End" /*ticketsBought <= freeSeats*/) {
            
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
            if (ticketsBought >= freeSeats /*ticketType == "End"*/) {
                isEnd = true;
                break;
            }
            ticketType=input.shift();
        }

        console.log(`${filmName} - ${(ticketsBought / freeSeats * 100).toFixed(2)}% full.`);
        totalTickets += ticketsBought;
        ticketsBought = 0;//важно е май
        filmName = input.shift();
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTickets / totalTickets* 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets / totalTickets* 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets / totalTickets* 100).toFixed(2)}% kids tickets.`);
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