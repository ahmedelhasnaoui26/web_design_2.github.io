import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Product from './components/Product/Product';
import Technology from './components/Technology/Technology';
import About from './components/About/About';
import Client from './components/Client/Client';
import Partner from './components/Partner/Partner';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/Services'>
            <Services />
          </Route>
          <Route path='/Product'>
            <Product />
          </Route>
          <Route path='/Technology'>
            <Technology />
          </Route>
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/Client'>
            <Client />
          </Route>
          <Route path='/Partner'>
            <Partner />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
