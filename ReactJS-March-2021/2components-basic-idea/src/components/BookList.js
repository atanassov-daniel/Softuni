import { Component } from 'react';

import Book from './Book';

class BookList extends Component {
    // this refers to the current instance of BookList

    // за да получам props задължително трябва да си декларираме constructor() {}
    /* constructor(props) {
        super(props);
    } */

    render() {
        return (
            <div className="book-list">
                <h2> Our Book Collection</h2>
                {/* 
                <Book title="Harry Potter" description="Wizards and stuff" />
                <Book title="Data Structures and Algorithms in JAVA" description="It will make you cry more than you have cried in your childhood" />
                <Book title="Programming with JS" description="Always code JS underwater so that no one can see you're crying" />
                <Book title="The Training Pyramid by Eric Helms" description="A book about everything fitness-related and much more" />
                */}
                {this.props.books.map((bookInfo, index) => <Book title={bookInfo.title} description={bookInfo.description} />)}
            </div>
        );
    }
}

export default BookList;