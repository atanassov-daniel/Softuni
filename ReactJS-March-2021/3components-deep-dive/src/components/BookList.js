import { Component } from 'react';

import Book from './Book';

class BookList extends Component {
    // this refers to the current instance of BookList

    // за да получам props задължително трябва да си декларираме constructor() {}
    /* constructor(props) {
        super(props);
    } */

    bookClicked(title, e) { // the event object gets passed in last
        console.log(e); // Harry Potter
        console.log("title:" + title); // title:[object Object]
        console.log(`The book ${title} has successfully been added!`); // The book [object Object]...
    }
    /* bookClicked(e, title) { // the event object gets passed in last
        console.log(e); // Harry Potter
        console.log("title:" + title); // title:[object Object]
        console.log(`The book ${title} has successfully been added!`); // The book [object Object]...
    } */

    render() {
        /* const bookElements = [
            <Book title="langaLunga" />,
            <Book title="langaLunga" />,
        ]; */

        const bookElements = this.props.books.map(bookInfo =>
            <Book
                key={bookInfo._id}
                title={bookInfo.title}
                description={bookInfo.description}
                clickHandler={this.bookClicked.bind(this, bookInfo.title)} // this refers to the event object, it gets passed as the last argument to the function
            />
        );

        return (
            <div className="book-list">
                <h2> Our Book Collection</h2>

                {bookElements}
            </div>
        );
    }
}

export default BookList;