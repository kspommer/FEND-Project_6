// Display book image, title, author to page

// import React 
import React, {Component} from 'react'

// method to update books
// Book component  - displays thumbnail image, title, authors(NEED WORK), picklist
class Books extends Component {

	// render each book and display certain fields (cover image, title, author)
	render() {
		return (
			<div key={this.props.title} className="book">
				<div className="book-top">
					<div key={this.props.title} className="book-cover" style={{ width: 128, height: 193,
						backgroundImage: this.props.imageLinks && this.props.coverImage ?
		      			`url(${this.props.coverImage})`:
		      			"url('./img/not-available.jpg')"}}></div>						
		            <div className="book-shelf-changer">
		              <select>
		                <option value="move" disabled>Move to...</option>
		                <option value="currentlyReading" onClick={() => onUpdateShelf(book, "currentlyReading")}>Currently Reading</option>
		                <option value="wantToRead" onClick={() => onUpdateShelf(book, "wantToRead")}>Want to Read</option>
		                <option value="read" onClick={() => onUpdateShelf(book, "read")}>Read</option>
		                <option value="none" onClick={() => onUpdateShelf(book, "none")}>None</option>
		              </select>
		            </div>
		    	</div>
		    	<div className="book-title">{this.props.title}</div>
		    	<div className="book-authors">{this.props.authors}</div>	
			</div>
		)
	}
}     				
     
export default Books