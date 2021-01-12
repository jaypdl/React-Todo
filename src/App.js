import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const todos = [
    {
      task: 'New Task!',
      id: 1,
      completed:false
    },
    {
      task: 'Second Task!',
      id: 2,
      completed:false
    }
  ]
  
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = JSON.parse(localStorage.getItem('ToDoSave'))
      // tasks: todos
    
  }

  updateLocalStorage = () => {
    localStorage.setItem('ToDoSave', JSON.stringify(this.state))
  }
  handleToggle = (taskId) => {
    // console.log(taskId)
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskId) {
          return({
            ...task, 
            completed: !task.completed
          })
        }
        return task;
      } )
    })
    this.updateLocalStorage();
  }
  
  handleAdd = (newTask) => {
    this.setState({
      tasks: [...this.state.tasks, {
        task: newTask,
        id: Date.now(),
        completed: false
      }]
    })
    this.updateLocalStorage();

  }

  handleClear = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return(
          !task.completed
        );
      })
    })
    this.updateLocalStorage();

  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} handleToggle={this.handleToggle} />
        <TodoForm handleAdd={this.handleAdd} handleClear={this.handleClear}/>
      </div>
    );
  }
}

export default App;
