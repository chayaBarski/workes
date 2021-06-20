import React from 'react';
import './App.css';
import store from "./redux/stor/stor";
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './component/login'
import AllUsers from './component/AllUsers'
function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/AllUsers' component={AllUsers} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
