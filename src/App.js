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
    books: []
    //showSearchPage: false
  }

  // make call to API - 
  // componentWillMount caused asynch error
  componentDidMount(){
    BooksAPI.getAll().then((books => {
      this.setState({books})
    }))
  }

  // tried another functional to insert error to no avail
  //async componentDidMount(){
    //try {
      //const books = await BooksAPI.getAll();
      //if (books) {
        //this.setState({book})
      //}  
    //}
    //catch(error) {
      //console.log(error)
    //}
  //}

// Display books; pass books array to Shelf component 
// Shelf component figures out what shelf books should be on
// Shelf components calls Book component to display book
  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div> 
          <div className="list-books-content">
              <Shelves books={this.state.books}/>
          </div>  
        </div>  
      </div>  
    )
  }
}

export default BooksApp