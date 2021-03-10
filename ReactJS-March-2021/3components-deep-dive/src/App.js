// import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import BookList from './components/BookList';
import Counter from './components/Counter';
import Footer from './components/Footer';

const booksData = [
  { _id: 0, title: 'Harry Potter', description: 'Wizards and stuff' },
  { _id: 1, title: 'Data Structures and Algorithms in JAVA', description: 'It will make you cry more than you have cried in your childhood' },
  { _id: 2, title: 'Programming with JS', description: 'Always code JS underwater so that no one can see you\'re crying' },
  { _id: 3, title: 'The Training Pyramid by Eric Helms', description: 'A book about everything fitness-related and much more' },
  { _id: 4, title: 'Chronicles of Narnia', description: 'Adventure' },
  { _id: 5, title: 'No description' },
  { _id: 6, description: 'Missing Book' },
];

function App() {
  return (
    <div className="site-wrapper">
      <Heading>
        <h1>Book Library</h1>
      </Heading>

      <Counter />

      <Counter />

      {/* <BookList /> */}
      <BookList books={booksData} />

      <Footer />
    </div>
  );
}

export default App;
