// Display three shelves
// Makes call to Books component to render each book on its specific shelf

// import React 
import React, {Component} from 'react'
// import components
import Books from './Books'

// Shelf component
class Shelves extends Component {
  // initialize state?
  books: []
  // pass the books array from API call from App.js

  //filter books by shelf from books array
  //arrayCurrentlyReading = this.state.books.filter(book => (book.shelf !== "currentlyReading"))
  //arrayWantToRead = this.state.books.filter(book => (book.shelf !== "wantToRead"))
  //arrayRead = this.state.books.filter(book => (book.shelf !== "read"))

  // map over each book for that shelf to display required books

  render() {
    console.log(this.state.books) // TESTING TO MAKE SURE RECEIVE DATA

    return ( 
      <div>
        this.state.books.map((book) => (        
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <Books key={book.title} title={book.title} authors={book.authors} coverImage={book.imageLinks.thumbnail} imageLink={this.imageLinks}/>
                    // books={this.props.books}
                  </li>
                </ol>      
              </div>
          </div>  
        ))  

       {/*} arrayWantToRead.map((book) => (        
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <Book book={this.state.book}/> 
                  </li>
                </ol>      
              </div>
          </div>
        )) 
        arrayRead.map((book) => (        
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <Book book={this.state.book}/> 
                  </li>
                </ol>      
              </div>
          </div>  
        )) */}
      </div>  
    )  
  }
}        

export default Shelves