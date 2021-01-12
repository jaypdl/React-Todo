// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component {
  render(){

    return(
      <div>
        {this.props.tasks.map(task => {
          return(
          <Todo key={task.id} task={task} handleToggle={this.props.handleToggle}/>
          )
        })}
      </div>
    )
  }
}

export default TodoList;