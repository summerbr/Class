import React, { Component } from 'react'

export class ToDos extends Component {
  render() {
    let todoItems = this.props.todos.map(todo => {
    return <li>{todo}</li>
    })
    return <h3>{todoItems}</h3>
  }
}

export default ToDos
