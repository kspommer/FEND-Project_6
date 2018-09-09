// Display three shelves
// Makes call to Books component to render each book on its specific shelf

// import React 
import React, {Component} from 'react'
// import components
import Books from './Books'

// Shelf component
class Shelves extends Component {
  // do not need to initialize state; get books array from app.js

  // MOVED FILTERING TO APP.JS
  // initialize filtered arrays
  //state = {
    //currentlyReading: [],
    //wantToRead: [],
    //read: [],
  //}

  //componentDidMount() {
    //filterCurrentlyReadingBooks(books).then((books => {
      //this.setState({currentReadingBooks})
    //}))
 //}

  // on load, call filter function by shelf
  // check that books array is available
  // map over each book for that shelf to display required books
  render() { 
    return ( 
      <div>          
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books && this.props.books.map(book => ( 
                  <li>
                    <Books key={book.title} title={book.title} authors={book.authors} 
                    coverImage={book.imageLinks.thumbnail} imageLinks={book.imageLinks}/>
                  </li>
                ))}  
              </ol>      
            </div>
        </div>   
      </div>
    )
  }
}    

export default Shelves