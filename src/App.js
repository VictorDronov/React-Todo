import React from "react";
import ToDoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";

const initialToDos = [
  {
    task: "Organize Room",
    id: Date.now(),
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: initialToDos,
    };
  }

  // This is to do with the forms
  addTask = (taskName) => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      toDos: [...this.state.toDos, newTask],
    });
  };
  formSubmit = (e) => {
    e.preventDefault();
    this.addTask(this.state.task);
  };

  inputChanges = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h3>Your Tasks:</h3>
        <ToDoList todo={this.state.toDos} />
        <ToDoForm
          inputChanges={this.inputChanges}
          formSubmit={this.formSubmit}
        />
      </div>
    );
  }
}

export default App;
