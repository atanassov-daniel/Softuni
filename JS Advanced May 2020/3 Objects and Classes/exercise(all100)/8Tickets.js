function solve(inputTickets, sortingCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }


    let ticketsArr = [];
    for (const line of inputTickets) {
        let [destinationName, price, status] = line.split('|');
        price = Number(price);

        ticketsArr.push(new Ticket(destinationName, price, status));
    }


    if (sortingCriterion === 'destination') {
        ticketsArr.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (sortingCriterion === 'price') {
        ticketsArr.sort((a, b) => a.price - b.price);
    } else if (sortingCriterion === 'status') {
        ticketsArr.sort((a, b) => a.status.localeCompare(b.status));
    }

    return ticketsArr;
}

solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
);
solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
);