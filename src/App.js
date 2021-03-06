import React from "react";
import ToDoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";
import "./components/Todo.css";
import ls from "local-storage";

const initialToDos = [
  {
    task: "Organize Room",
    id: Math.random(),
    completed: false,
  },
  {
    task: "Bake Cookies",
    id: Math.random(),
    completed: false,
  },
  {
    task: "Clean Car",
    id: Math.random(),
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDos: [],
      // formValue: "",
    };
  }
  //This is to mark completed task and then clear

  toggleCompleted = (clickedTaskId) => {
    this.setState({
      toDos: this.state.toDos.map((item) => {
        if (item.id === clickedTaskId) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      }),
    });
  };
  clearCompleted = () => {
    this.setState({
      toDos: this.state.toDos.filter((item) => {
        if (item.completed === false) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
      }),
    });
  };

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

  componentDidMount() {
    console.log("cdm is running")
    this.setState({ toDos: initialToDos });
    ls.get("Task", JSON.stringify(this.state.toDos))
  }
  componentDidUpdate(){
    console.log("CDU is running")
    ls.set("Task", JSON.stringify(this.state.toDos))
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log("render", this.state.toDos.length)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <h3>Your Tasks:</h3>
        <ToDoList
          todo={this.state.toDos}
          toggleCompleted={this.toggleCompleted}
        />
        <ToDoForm
          inputChanges={this.inputChanges}
          formSubmit={this.formSubmit}
          task={this.state.toDos.task}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}
localStorage.clear();

export default App;
