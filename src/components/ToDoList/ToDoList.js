import React, { Component } from "react";

import ToDoItem from "../ToDoItem/ToDoItem";
import AddNewItem from "../AddNewItem/AddNewItem";
import Filter from "../Filter/Filter";
import { FilterState } from "../Filter/FilterState";

import "./ToDoList.css";

export default class ToDoList extends Component {
  render() {
    return (
      <div className="ToDoList">
        <p>Hello</p>
        <AddNewItem onAdd={this.addHandler} />
        <Filter />
        <ToDoItem />
      </div>
    );
  }
}
