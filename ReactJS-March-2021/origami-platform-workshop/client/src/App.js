// import './App.css';
import './style.css';
import NavBar from './components/NavBar';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <NavBar />

        <Aside />

        <Main />

        <Footer />
      </div>
    </div>
  );
}

export default App;
