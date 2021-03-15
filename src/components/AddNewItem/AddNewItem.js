import React, { useState } from "react";

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
    <div>
      <input type="text" value={newToDoTxt} onChange={ToDoInputHandler} />
      <button tyle="submit" onClick={addHandler}>
        Add New Item
      </button>
    </div>
  );
}
