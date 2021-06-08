import React from "react";
import './App.scss';
import Navbar  from "./Component/Navbar";
import Newnews  from "./Component/Newnews";
import Best  from "./Component/Best";
import Top  from "./Component/Top";
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';


class App extends React.Component {
  constructor() {
    super();
  }

render () {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <Route path="/newnews" component={Newnews} />
        <Route path="/best" component={Best} />
        <Route path="/top" component={Top} />
        
        
      
    </div>
    </Router>
  );
}
}

export default App;