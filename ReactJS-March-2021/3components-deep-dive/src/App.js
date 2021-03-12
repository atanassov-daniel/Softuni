// import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import BookList from './components/BookList';
import Counter from './components/Counter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="site-wrapper">
      <Heading>
        <h1>Book Library</h1>
      </Heading>

      <Counter />

      <Counter />

      <BookList />

      <Footer />
    </div>
  );
}

export default App;
