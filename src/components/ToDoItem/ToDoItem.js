import React from "react";

export default function ToDoItem({ todo, onDelete, onCompleted }) {
  //basic style:
  let basicStyle = { cursor: "pointer", marginRight: 10 };
  if (todo.completed) {
    basicStyle.textDecoration = "line-through";
  }

  //completed:
  const handleCompleted = () => {
    onCompleted(todo.id);
  };

  //deleted:
  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div className="ToDoItem">
      <p style={basicStyle} onClick={handleCompleted}>
        {todo.text}
      </p>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}
