import Header from './components/Header';
import Footer from './components/Footer';
import Lorem from './components/Lorem';

function App() { // the component is just a function that returns JSX
  /* let heading1Message = 'Hello From React JSX Component';
  
  return (
    <header>
      <h1>{`${heading1Message}...`}</h1>
      <h2>The best framework ever</h2>
    </header>
  ); */

  /* return (
    <Header name='thisIsJustAnExample'/> // components that have no elements inside their opening and closing tags can be closed this way
    // <Header></Header>
  ); */

  /* return (
    <Header />
    <Footer />
  ); // this won't work because we have 2 root elements */

  /* return (
    <div>
      <Header />

      <main>
        <p>Lorem ipsum dolor sit amet lore mauris sed, Lorem ipsum dolor sit amet lore mauris sed</p>
        <p>Lorem ipsum dolor sit amet lore mauris sed, Lorem ipsum dolor sit amet lore mauris sed</p>
        <p>Lorem ipsum dolor sit amet lore mauris sed, Lorem ipsum dolor sit amet lore mauris sed</p>
        <br></br>
      </main>

      <Footer />
    </div>
  ); // this is the easiest way to fix the above error, but there are others too */

  return (
    <div className="site-wrapper">
      <Header>Hello from the App Component</Header>

      <main>
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <Lorem />
        <br></br>
      </main>
      
      <Footer />
    </div>
  ); // this is the easiest way to fix the above error, but there are others too
  
}

export default App;