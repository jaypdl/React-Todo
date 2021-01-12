import React from 'react';

class TodoForm extends React.Component {
  constructor(){
    super();
    this.state = {
      inputValue: ''
    }
  }

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputValue.trim() !==''){
    this.props.handleAdd(this.state.inputValue.trim())
    this.setState({
      inputValue: ''
    });}
  }

  clearButton = e => {
    e.preventDefault();
    this.props.handleClear();
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          placeholder='New Task'
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button>Add</button>
        <button onClick={this.clearButton}>Clear Completed</button>
      </form>
        </>
    )
  }
}

export default TodoForm;