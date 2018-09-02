// import React libraru
import React, {Component} from 'react'
// import API
import * as BooksAPI from './BooksAPI'
// import style sheet
import './App.css'
// import components
import BookList from './Books'

const books = [
  {
  //"imageURL": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")", 
  "title": "To Kill a Mockingbird",
  "authors": "Harper Lee", 
  "state": "Currently Reading"
  },
  { 
  //"imageURL": "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api", 
  "title": "Ender\'s Game", 
  "authors": "Orson Scott Card", 
  "state": "Currently Reading"
  }
]  

class BooksApp extends Component {
  //state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //books: []
    //showSearchPage: false
  //}

  // make call to API  
  //componentDidMount(){
    //BooksAPI.getAll().then(book => {
        //this.setState({books: books})
   // })
  //}

// Display books; pass books array to Books Component 
  render() {
    return (
      <div className="app">
        <div>
          <BookList books={books}/>
        </div>  
      </div>  
    )
  }
}

export default BooksApp