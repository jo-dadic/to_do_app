import React, { Component } from "react";

import ToDoList from "./components/ToDoList/ToDoList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">
          <h1>To Do Application</h1>
          <ToDoList />
        </div>
      </div>
    );
  }
}

export default App;
