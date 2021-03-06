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
                title={bookInfo.title}
                clickHandler={(e) => this.bookClicked(bookInfo.title, e)}
            />
        );

        return (
            <div className="book-list">
                <h2> Our Book Collection</h2>
                {/* 
                <Book title="Harry Potter" description="Wizards and stuff" />
                <Book title="Data Structures and Algorithms in JAVA" description="It will make you cry more than you have cried in your childhood" />
                <Book title="Programming with JS" description="Always code JS underwater so that no one can see you're crying" />
                <Book title="The Training Pyramid by Eric Helms" description="A book about everything fitness-related and much more" />
                */}
                {/* {this.props.books.map(bookInfo =>
                    <Book
                        title={bookInfo.title}
                        description={bookInfo.description}
                        // clickHandler={this.bookClicked.bind(this, bookInfo.title)} // this refers to the event object, it gets passed as the last argument to the function
                        clickHandler={(e) => this.bookClicked(bookInfo.title, e)} // in this case we won't have a problem with the value of this, because the arrow function doesn;t keep its own function context

                    />
                )} */}

                {bookElements}
            </div>
        );
    }
}

export default BookList;