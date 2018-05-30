import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Shelf from './components/Shelf';
import MainPage from './components/MainPage';
import Bins from './components/Bins';
import CreateBin from './components/CreateBin';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Switch>
          <Route path='/bins/:id' component={ Shelf }/>
          <Route path='/bin/:id' component={ Bins } />
          <Route path='/create/:id' component={CreateBin} />
          <Route path='/' component={ MainPage }/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;