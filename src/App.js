import React, { Component } from "react";

import ToDoList from "./components/ToDoList/ToDoList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>To Do Application</h1>
        <ToDoList />
      </div>
    );
  }
}

export default App;
