import React from 'react';

const Todo = props => {

  const handleClick = () =>{
    props.handleToggle(props.task.id)
  }

  // console.log('in todo', props)
  return (
    <div onClick={handleClick} className={props.task.completed ? 'completed' : ''}>
      {props.task.task}
    </div>
  )
}

export default Todo;