import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch, Redirect} from "react-router-dom";
import Header from './components/Header';
import Shop from './scenes/Shop'
import Checkout from './scenes/Checkout';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header/>
            <Switch>
              <Route
                exact
                path="/store"
                component={Shop}
              />
              <Route
                exact
                path="/checkout"
                component={Checkout}
              />
              <Redirect to="/store"/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;