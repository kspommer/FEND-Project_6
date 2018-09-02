// import React libraru
import React, {Component} from 'react'
// import API
import * as BooksAPI from './BooksAPI'
// import style sheet
import './App.css'
// import components
import BookList from './Books'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
    //showSearchPage: false
  }

  // make call to API - 
  // componentWillMount causes asynch error
  componentDidMount(){
    BooksAPI.getAll().then((books => {
        this.setState({books})
        console.log(books)
    }))
  }

// Display books; pass books array to Books Component 
  render() {
    return (
      <div className="app">
        <div>
          <BookList books={this.state.books}/>
        </div>  
      </div>  
    )
  }
}

export default BooksApp