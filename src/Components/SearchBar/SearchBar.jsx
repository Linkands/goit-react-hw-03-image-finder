import React, { Component } from 'react'
// import './SearchBar.module.css'

function SearchBar({ onSearch }) {
  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(e.target.elements.searchQuery.value)
  }
  return (
    <header className="SearchBar">
      <form className="SearchForm" onSubmit={handleSearch}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )
}

export default SearchBar

// export default class SearchBar extends Component {
//   state = {
//     query: '',
//   }

//   changeQuery = (e) => {
//     this.setState({ query: e.target.value.toLowerCase() })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()

//     this.props.onSubmit(this.state.query)
//     this.setState({ query: '' })
//   }

//   render() {
//     return (
//       <header className="SearchBar">
//         <form onSubmit={this.handleSubmit} className="SearchForm">
//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             // value={this.state.query}
//             onChange={this.changeQuery}
//             value={this.state.query}
//           />
//         </form>
//       </header>
//     )
//   }
// }
