import React, { useState } from "react";

import { Button } from "../Button/Button";

import "./AddNewItem.css";

export default function AddNewItem({ onAdd }) {
  //useState hook
  const [newToDoTxt, setNewToDoTxt] = useState("");

  //setting state to user's text from input:
  const ToDoInputHandler = (event) => {
    const todotxt = event.target.value;
    setNewToDoTxt(todotxt);
  };

  //handling adding new text:
  const addHandler = () => {
    const newtxt = newToDoTxt.trim();
    if (newtxt.length === 0) {
      return;
    }

    onAdd(newtxt);
    //reset input:
    setNewToDoTxt("");
  };

  return (
    <div className="formContainer">
      <input
        type="text"
        placeholder="Type here"
        value={newToDoTxt}
        onChange={ToDoInputHandler}
      />
      <Button buttonSize="btn--large" type="submit" onClick={addHandler}>
        Add New Task
      </Button>
    </div>
  );
}
