import { Switch, Route } from 'react-router-dom';

// import './App.css';
import './styles/styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import CreatePet from './components/CreatePet';
import MyPets from './components/MyPets';
import DeletePet from './components/DeletePet';

function App() {
  return (
    <>
      <Header />

      <main id="site-content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/create-pet" exact component={CreatePet} />
          <Route path="/my-pets" exact component={MyPets} />
          <Route path="/delete-pet" exact component={DeletePet} />

          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </main>

      <Footer />
    </>
  );
}

export default App;
