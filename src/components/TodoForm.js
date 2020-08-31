import React from "react";

const ToDoForm = (props) => {
  const { inputChanges, formSubmit } = props;
  return (
    <div>
      <form onSubmit={formSubmit} >
        <label>
          Task &nbsp;
          <input type="text" onChange={inputChanges} />
        </label>
        &nbsp;
        <button>Enter</button>
      </form>
    </div>
  );
};

export default ToDoForm;
