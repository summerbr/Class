import React, { Component } from 'react';
import './App.css';
import ToDos from './components/ToDos';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      taskName: '',
      todos: [] //create an object or class to store multiple values
    }
  }
  
  handleChange= (e) => {
    this.setState({
      taskName: e.target.value //value is passed to local state
    })
  }

  handleSubmit= () => {
    // alert('task submitted: ' + this.state.taskName);
    this.setState({
      todos: this.state.todos.concat(this.state.taskName)
    })
  }


  render() {
    return (
      <div>
        <h1>To Do List</h1>
        {/* <h2>Pending</h2> */}
        <ToDos todos = {this.state.todos} />
        {/* <h2>Completed</h2> */}
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add</button>
        
      </div>
    )
  }
}



export default App;
