import React from "react";
import "./App.scss";
import Navbar from "./Component/Navbar";
import Newnews from "./Component/Newnews";
import Best from "./Component/Best";
import Top from "./Component/Top";
import Comments from "./Component/Comments";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="app-body">
            <Switch>
              <Route path="/" exact component={Newnews} />
              <Route path="/best" component={Best} />
              <Route path="/top" component={Top} />
              <Route path="/com" component={Comments} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
