// Display three shelves

// import React 
import React, {Component} from 'react'

// Shelf component
function Shelves(props) {
// map over each book and display on a particular shelf
	return (
	{props.books.map(book => (
		<div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">one</div>
			</div>	

			<div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">two</div>
            </div>

            
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">three</div> 
            </div>
        </div>
    ))}
}

export default Shelves