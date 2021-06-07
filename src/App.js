import React from "react";
import './App.scss';
import Navbar  from "./Component/Navbar";
import Newnews  from "./Component/Newnews";
import Best  from "./Component/Best";
import Top  from "./Component/Top";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
render () {
  return (
    <div className="App">
      <div>
        <Newnews />
        <Best/>
        <Top/>
        <Navbar/>
      </div>
    </div>
  );
}
}

export default App;