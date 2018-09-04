// Display three shelves
// Makes call to Book component to render each book on its specific shelf

// import React 
import React, {Component} from 'react'
// import components
import Book from './Books'
import App from './App'

// Shelf component
class Shelves extends Component {
  // filter by shelf to create three unique book arrays
  arrayCurrentlyReading = this.state.books.filter(book => (book.readingModes.shelf === "currentlyReading"))
  arrayWantToRead = this.state.books.filter(book => (book.readingModes.shelf === "wantToRead"))
  arrayRead = this.state.books.filter(book => (book.readingModes.shelf === "read"))

  // map over each book and figure out what shelf they are on
  render() {
    return ( 
      <div>
        // filter the list of books three times and render list items
        {arrayCurrentlyReading.map((book) => (        
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
        ))}  

        {arrayWantToRead.map((book) => (        
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
        ))} 

        {arrayRead.map((book) => (        
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
        ))}
      </div>  
    )  
  }
}        

export default Shelves

{/*Filter reference:  https://stackoverflow.com/questions/42894774/react-filter-method-without-mutating-state*/}