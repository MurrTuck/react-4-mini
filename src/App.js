import React, { Component } from "react";
import { HasRouter } from 'react-router-dom'
import Nav from "./Components/Nav/Nav";
import router from './router'
import "./App.css";

class App extends Component {
  render() {
    return (
      //brought it into App.js, it's usually in the index.js file. 
      <HasRouter>
        <div className="App">
          <Nav />
          {router}
        </div>
      </HasRouter>
    );
  }
}

export default App;
