// Display book image, title, author to page

// import React 
import React, {Component} from 'react'

// method to update books
// Book component  - displays thumbnail image, title, authors(NEED WORK), picklist
class SearchBook extends Component {

	// method to check if search results are already on a shelf
    checkShelf = (searchResults, books) => {
    	searchResults.map(result =>
	    	// compare result.id against each current book.if
	      	// if a match, change the result.shelf = book.shelf
	      	// if no match, set to "none"
	      	// need to initialize shelf to "none" 
	      	result.shelf = "none"

	      	this.books.map(book => (
	        	(book.id === result.id) ? result.shelf = book.shelf : "none" 
	      	))
	      	console.log(result.shelf)
	      	this.setState({books}) // TESTING - REMOVE - OK HERE
	    )
	}
 
	render() {
		checkShelf(this.props.searchResults, this.props.books)

		return (          
			<div className="search-books-results">
              	<ol className="books-grid">	
                  <li>
                    <Books book={result} shelfChanger={this.shelfChanger}/>
                  </li>
                })}
              </ol>
            </div>
        )
    } 
}


export default SearchBook