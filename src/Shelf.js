// Display three shelves
// Makes call to Books component to render each book on its specific shelf

// import React 
import React, {Component} from 'react'
// import components
import Books from './Books'

// Shelf component
class Shelves extends Component {
  // do not need to initialize state; get books array from app.js

  //filter books by shelf from books array
  //arrayCurrentlyReading = this.state.books.filter(book => (book.shelf !== "currentlyReading"))
  //arrayWantToRead = this.state.books.filter(book => (book.shelf !== "wantToRead"))
  //arrayRead = this.state.books.filter(book => (book.shelf !== "read"))

  // map over each book for that shelf to display required books

  //componentDidMount(){
  
    //console.log(this.props.books)  // TESTING
  //}

  render() {
    return ( 
      <div>
        {this.props.books && this.props.books.map((book) => (        
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  <li>
                    <Books key={book.title} title={book.title} authors={book.authors} 
                    coverImage={book.imageLinks.thumbnail} imageLinks={book.imageLinks}/>
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