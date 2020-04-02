import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import BottomBar from "./components/navbottom";
import MallDetail from "./components/HomeMall/mallDetail";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* <Route path="/city" component={City}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/order" component={Order}></Route> */}
        <Route path='/malldetail' component={MallDetail}></Route>
        <Route path='/' component={BottomBar}></Route>
      </Switch>
    </Router>
  );
};

export default App;
