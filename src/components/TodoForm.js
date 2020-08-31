import React from "react";

const ToDoForm = (props) => {
  const { inputChanges, formSubmit, task, clearCompleted } = props;
  return (
    <div>
      <form onSubmit={formSubmit}>
        <label>
          Task &nbsp;
          <input type="text" name="task" onChange={inputChanges} value={task} />
        </label>
        &nbsp;
        <button>Add ToDo</button>
      </form>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default ToDoForm;
