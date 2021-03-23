import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ToDoList from "./components/ToDoList/ToDoList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <div className="Container">
            {/* <h1>To Do Application</h1> */}
            <ToDoList />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
