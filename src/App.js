import React from "react";
import Links from "./components/Links";
import Search from "./components/Search"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="container p-4">
        <Switch>
          <Route path='/search' component={Search}></Route>
          <Route path='/links' component={Links}></Route>
          
        </Switch>

      </div>
    </Router>
  );
}

export default App;
