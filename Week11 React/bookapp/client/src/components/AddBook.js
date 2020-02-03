import React, { Component } from 'react'

class AddBook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '', 
      author: '', 
      genre: '',
      imageURL: ''
    }
  }

  handleChange = (e) => (
    this.setState({
      [e.target.name]: e.target.value
    })
  )

  handleAdd = (title, author, genre, imageURL) => {
      fetch('http://localhost:8080/add-book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.state.title, 
          author: this.state.author, 
          genre: this.state.genre,
          imageURL: this.state.imageURL
        })
    }).then(()=> {
      this.props.onBookAdded()
    }) 
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} name='title' placeholder='title'>
        </input>
        <input onChange={this.handleChange} name='author' placeholder='author'>
        </input>
        <input onChange={this.handleChange} name='genre' placeholder='genre'>
        </input>
        <input onChange={this.handleChange} name='imageURL' placeholder='imageURL'>
        </input>
        <button onClick={this.handleAdd}>Add Book</button>
      </div>
    )
  }
}

export default AddBook