import React from "react";

const ToDo = (props) => {
  const { task,toggleCompleted } = props;
  return (
    <div 
    onClick={()=>toggleCompleted(task.id)}
    className={`task${task.completed ? " completed" : ""}`}>
      <p key={task.id}>{task.task}</p>
    </div>
  );
};

export default ToDo;
