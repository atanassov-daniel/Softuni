import { Component } from 'react';
import bookService from '../services/bookService';
import Book from './Book';

class BookList extends Component {
    constructor(props) {
        super(props);

        this.state = { books: [] }; // we should always habe a default state
    }

    bookClicked(title, e) { // the event object gets passed in last
        console.log(e);
        console.log("title:" + title);
        console.log(`The book ${title} has successfully been added!`);
    }

    componentDidMount() {
        bookService.getAll()
            .then(booksData => {
                this.setState(() => ({ books: booksData }));
            });
        /* fetch('http://localhost:3000/books')
            .then(resp => resp.json())
            .then(booksData => {
                this.setState(() => ({ books: booksData }));
            }); */
    }

    render() {
        if (this.state.books.length === 0) {
            return <strong>Loading books...</strong>;
        }

        const bookElements = this.state.books.map(bookInfo =>
            <Book
                key={bookInfo.id}
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