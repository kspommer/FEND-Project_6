// import React libraru
import React from 'react'
// import API
import * as BooksAPI from './BooksAPI'
// import style sheet
import './App.css'
// import components
//import Books from './Books'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
   books: []
    // deleted line here in original App.js
  }

  // make call to API  
  componentDidMount(){
    BooksAPI.getAll().then(book => {
        this.setState({books: books})
    })
  }

  // trying to print the book array returned by API 
  render() {
    return (
        console.log(books)
    )
  }
}