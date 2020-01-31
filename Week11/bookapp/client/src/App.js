import React, { Component } from 'react'
import './App.css';
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      books: []
    }
    fetch('http://localhost:8080/books')
    .then(response => response.json())
    .then(data => 
        {
      this.setState({
        books: data
          })
      })
  }

  render() {
    const bookList = this.state.books.map(book => {
      return <div key = {book.id}>
        <p><strong>{book.title}</strong> </p>
        <img alt="cover" src={book.imageURL} />
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Year: {book.year}</p>
      </div>
    })

    return (
      <div>
        {bookList}
      </div>
    )
  }
}

export default App;
