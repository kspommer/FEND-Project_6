// import React libraru
import React, {Component} from 'react'
// import API
import * as BooksAPI from './BooksAPI'
// import style sheet
import './App.css'
// import components
import Shelves from './Shelf'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    arrayCurrentlyReading: [],
    arrayWantToRead: [],
    arrayRead: [],
    showSearchPage: false
  }

  // make call to API - use of componentWillMount caused asynch error
  componentDidMount(){
    BooksAPI.getAll().then((books => {
      const arrayCurrentlyReading = books.filter(book => (book.shelf === "currentlyReading"))
      const arrayWantToRead = books.filter(book => (book.shelf === "wantToRead"))
      const arrayRead = books.filter(book => (book.shelf === "read"))      

      const shelfTitle1 = 'Currently Reading'
      const shelfTitle2 = 'Want To Read'
      const shelfTitle3 = "Read" 
      
      this.setState({books, arrayCurrentlyReading, arrayWantToRead, arrayRead, shelfTitle1, shelfTitle2, shelfTitle3})
      
      console.log({arrayCurrentlyReading}) /// TESTING
      console.log(shelfTitle1)
      //console.log({arrayWantToRead}) /// TESTING
      //console.log({arrayRead}) /// TESTING
    }))
  }

  //filterCurrentlyReadingBooks = (book) => {
    //this.setState((state) => ({
      //currentlyReadingBooks: state.books.filter((book) => book.shelf === "currentlyReading")
    //}))
  //}

  //filterWantToReadBooks = (book) => {
    //this.setState((state) => ({
      //wantToReadBooks: state.books.filter((book) => book.shelf === "wantToRead")
    //}))
  //}

  //filterReadBooks = (book) => {
    //this.setState((state) => ({
      //readBooks: state.books.filter((book) => book.shelf === "read")
    //}))
  //}

  // tried another API function, managing error handling with no success
  //async componentDidMount(){
    //try {
      //const books = await BooksAPI.getAll();
      //if (books) {
        //this.setState({book})
      //}  
    //}
    //catch(error) {  // Issue is in catch
      //console.log(error)
    //}
  //}

// Display books; pass books array to Shelf component 
// On load, Shelf component calls shelf filter functions above
// Shelf components calls Book component to display book
  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div> 
          <div className="list-books-content">
            <Shelves books={this.state.arrayCurrentlyReading} shelfTitle={this.state.shelfTitle1}/>
            <Shelves books={this.state.arrayWantToRead} shelfTitle={this.state.shelfTitle2}/>
            <Shelves books={this.state.arrayRead} shelfTitle={this.state.shelfTitle3}/>
          </div>  
        </div>  
      </div>  
    )
  }
}

export default BooksApp