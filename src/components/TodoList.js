// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// className={`item${props.item.purchased ? " purchased" : ""}`}

import React from "react";
import ToDo from "./Todo";

const ToDosList = (props) => {
    const {toggleCompleted} = props
  return (
    <div className="todo-list">
      {props.todo.map((item) => (
        <ToDo
        key={item.id} 
        task={item}
        toggleCompleted={toggleCompleted} 
        />
      ))}
    </div>
  );
};

export default ToDosList;
