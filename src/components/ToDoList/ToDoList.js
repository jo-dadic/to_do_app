import React, { Component } from "react";

import ToDoItem from "../ToDoItem/ToDoItem";
import AddNewItem from "../AddNewItem/AddNewItem";
import Filter from "../Filter/Filter";
import { FilterState } from "../Filter/FilterState";

import "./ToDoList.css";

let idCounter = 1;
export default class ToDoList extends Component {
  state = {
    todolist: [],
    filter: FilterState.ALL,
  };

  //adding tasks:
  addHandler = (newtxt) => {
    idCounter++;

    const newToDo = { id: idCounter, text: newtxt, completed: false };
    const newToDoList = [...this.state.todolist, newToDo];
    this.setState({ todolist: newToDoList });
  };

  //deleting tasks:
  deleteHandler = () => {
    const updatedList = this.state.todolist.filter((todo) => todo.id !== id);
    this.setState({ todolist: updatedList });
  };

  //check completed tasks:
  checkCompletedHandler = (id) => {
    const completedList = [...this.state.todolist];
    const todo = completedList.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.setState({ todolist: completedList });
    }
  };

  //clear completed tasks:
  clearCompletedHandler = () => {
    const clearedList = this.state.todolist.filter(
      (todo) => todo.completed === false
    );
    this.setState({ todolist: clearedList });
  };

  render() {
    return (
      <div className="ToDoList">
        <p>Hello</p>
        <AddNewItem onAdd={this.addHandler} />
        <Filter />
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={this.deleteHandler}
          onCompleted={this.checkCompletedHandler}
        />
        <button onClick={this.clearCompletedHandler}>Clear Completed</button>
      </div>
    );
  }
}
