import React, { Component } from 'react'
import './App.css';
// import BookList from './components/BookList'
import AddBook from './components/AddBook'
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      books: []
    }
 
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = () => {
    fetch('http://localhost:8080/books')
    .then(response => response.json())
    .then(data => 
        {
      this.setState({
        books: data
          })
      })
  }

  handleBookAdded = () => {
    //console.log('handlebookadded')
    this.fetchBooks()
  }

  render() {
    const bookList = this.state.books.map(book => {
      return <div className="book-list" key = {book.id}>
        <p><strong>{book.title}</strong> </p>
        <img alt="cover" src={book.imageURL} />
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
      </div>
    })

    return (
      <div>
        {bookList}
        <AddBook onBookAdded = {this.handleBookAdded} />
      </div>
    )
  }
}

export default App;
