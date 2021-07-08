import { Component } from 'react'

import ImageGallery from './Components/ImageGallery/ImageGallery'
import SearchBar from './Components/SearchBar/SearchBar'

export default class App extends Component {
  state = {
    pictures: [],
    query: '',
  }

  componentDidMount() {
    fetch(
      `https://pixabay.com/api/?q=${this.state.query}&page=1&key=21748955-40ae248ad9ce65df002076b41&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then((response) => response.json())
      .then((pictures) => this.setState({ pictures: pictures.hits }))
  }

  render() {
    const { pictures } = this.state
    return (
      <div className="App">
        <SearchBar></SearchBar>
        <ImageGallery picturesData={pictures}></ImageGallery>
      </div>
    )
  }
}
