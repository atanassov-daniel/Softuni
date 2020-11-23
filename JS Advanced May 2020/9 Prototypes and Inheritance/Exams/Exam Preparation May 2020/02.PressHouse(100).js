function pressHouse() {
    // да го направя с прототипа на toString
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Title: ${this.title}\nContent: ${this.content}`;
        }
    }

    class ShortReports extends Article {
        constructor(title, content, originalResearches) {
            super(title, content);
            //this.content = content;
            if (this.constructor.name === "ShortReports") {
                let contLength = content.length;
                if (contLength > 150) {
                    throw new Error("Short reports content should be less then 150 symbols.");
                } else {
                    this.content = content;
                }
            }
            //this.originalResearches = originalResearches;
            if (originalResearches.title === undefined || originalResearches.author === undefined) {
                throw new Error("The original research should have author and title.");
            } else {
                this.originalResearches = originalResearches;
            }
            this.comments = [];
        }
        // set content(content) {
        // if (this.constructor.name === "ShortReports") {
        //     let contLength = content.length;
        //     if (contLength > 150) {
        //         throw new Error("Short reports content should be less then 150 symbols.");
        //     } // else { this.content = content;}
        // }
        // }

        // get content() {
        //     return this.content;
        // }

        // set originalResearches(originalResearches) {
        // if (originalResearches.title === undefined || originalResearches.author === undefined) {
        //     throw new Error("The original research should have author and title.");
        // }
        // this.originalResearches = originalResearches;
        // }

        // get originalResearches() {
        //     return this.originalResearches;
        // }
        addComment(comment) {
            this.comments.push(comment);
            return "The comment is added.";
        }
        toString() {
            // let oldResult = Object.getPrototypeOf(Object.getPrototypeOf(this));
            // console.log(oldResult.toString.apply(this));
            let res = `Title: ${this.title}\nContent: ${this.content}\nOriginal Research: ${this.originalResearches.title} by ${this.originalResearches.author}`;
            if (this.comments.length > 0) {
                res += "\nComments:";
                this.comments.forEach(comment => res += "\n" + comment);
            }
            return res;
        }
    }

    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clients = []; // {clientName, orderDescription}
        }

        addClient(clientName, orderDescription) {
            let objToAdd = {
                clientName,
                orderDescription
            };

            let foundItemIndex = this.clients
                .map(obj => JSON.stringify(obj))
                .indexOf(JSON.stringify(objToAdd));

            if (foundItemIndex !== -1) {
                //throw new Error("This client has already ordered this review.");
                throw new Error("This client has already ordered this review.");
            } else {
                //obj.clientName === clientName && obj.orderDescription === orderDescription
                this.clients.push(objToAdd);

                return `${clientName} has ordered a review for ${this.book.name}`;
            }
        }

        toString() {
            let res = `Title: ${this.title}\nContent: ${this.content}\nBook: ${this.book.name}`;
            if (this.clients.length > 0) {
                res += "\nOrders:";
                this.clients.forEach(client => res += `\n${client.clientName} - ${client.orderDescription}`);
            }
            return res;
        }
    }

    return {
        Article,
        ShortReports,
        BookReview
    };
}

let classes = pressHouse();

// let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
// console.log(lorem.toString());

let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", {
    title: "Dragon 2",
    author: "wikipedia.org"
});
console.log(short.addComment("Thank god they didn't use java."));
short.addComment("In the end JavaScript\"s features are executed in C++—the underlying language.");
console.log(short.toString());

let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", {
    name: "The Great Gatsby",
    author: "F Scott Fitzgerald"
});
console.log(book.addClient("The Guardian", "100 symbols"));
console.log(book.addClient("Goodreads", "30 symbols"));
console.log(book.toString());