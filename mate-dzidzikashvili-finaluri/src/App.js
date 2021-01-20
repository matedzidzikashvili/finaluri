import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/home';
import Products from './components/products/products';
import BestSellers from './components/sellers/sellers';
import About from './components/about/about';
import LoginPage from './components/log-in/login';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/products' exact component={Products}/>
        <Route path='/about' exact component={About}/>
        <Route path='/log-in' exact component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
