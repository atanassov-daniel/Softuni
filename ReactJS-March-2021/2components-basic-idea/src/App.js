// import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import BookList from './components/BookList';
import Counter from './components/Counter';

const booksData = [
  { title: 'Harry Potter', description: 'Wizards and stuff' },
  { title: 'Data Structures and Algorithms in JAVA', description: 'It will make you cry more than you have cried in your childhood' },
  { title: 'Programming with JS', description: 'Always code JS underwater so that no one can see you\'re crying' },
  { title: 'The Training Pyramid by Eric Helms', description: 'A book about everything fitness-related and much more' },
  { title: 'Chronicles of Narnia', description: 'Adventure' },
  { title: 'No description' },
  { description: 'Missing Book' },
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
    </div>
  );
}

export default App;
