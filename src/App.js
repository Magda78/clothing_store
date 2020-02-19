import React, {Component} from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage}/>
      </Switch>
    </div>
  );
}
}

export default App;
