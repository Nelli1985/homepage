import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route'
import Home from './components/Home';
import Who from './components/Who';
import What1 from './components/What1';
import What2 from './components/What2';
import Where from './components/Where';
import Menu from './components/Menu';


class App extends Component {
  render() {
    return (
      <Router>
        <div >
            <Route path='/' exact strict component={Home} /> 
            <Route path='/who' exact strict component={Who} />
            <Route path='/what1' exact strict component={What1} />
            <Route path='/what2' exact strict component={What2} />
            <Route path='/where' exact strict component={Where} />
            <Route path='/menu' exact strict component={Menu} />
        </div>
      </Router>
    );
  }
}

export default App;
