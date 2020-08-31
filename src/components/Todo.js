import React from "react";

const ToDo = (props) => {
  const { task } = props;
  return (
    <div>
      <p key={task.id}>{task.task}</p>
    </div>
  );
};

export default ToDo;
