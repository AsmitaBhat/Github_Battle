import Home from "./Home";
import React from "react";
import Battle from "./Battle";
import Popular from "./Popular";
import Results from "./Results";
import {Router,Route,Switch} from "react-router-dom";
import Nav from "./Nav";
import createHashHistory from "history/createHashHistory";





class App extends React.Component {
  render() {
    const history = createHashHistory();
    return (
      <Router history={history}>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Results} />
            <Route path="/popular" component={Popular} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
