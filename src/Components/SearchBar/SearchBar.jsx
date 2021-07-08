import React, { Component } from 'react'
import './SearchBar.module.css'

// function SearchBar() {
//   return (
//     <header className="SearchBar">
//       <form className="SearchForm">
//         <button type="submit" className="SearchForm-button">
//           <span className="SearchForm-button-label">Search</span>
//         </button>

//         <input
//           className="SearchForm-input"
//           type="text"
//           autoComplete="off"
//           autoFocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     </header>
//   )
// }

// export default SearchBar

export default class SearchBar extends Component {
  state = {
    query: '',
  }

  changeQuery = (e) => {
    this.setState({ query: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.query)
    console.log(this.props.pictures)
  }

  render() {
    return (
      <header className="SearchBar">
        <form onSubmit={this.onSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            // value={this.state.query}
            onChange={this.changeQuery}
          />
        </form>
      </header>
    )
  }
}
