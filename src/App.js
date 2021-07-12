import { Component } from 'react'

import ImageGallery from './Components/ImageGallery/ImageGallery'
import SearchBar from './Components/SearchBar/SearchBar'
import Button from './Components/Button/Button'
import Modal from './Components/Modal/Modal'
import { fetchImages } from './services/api.js'

import Loader from 'react-loader-spinner'

export default class App extends Component {
  state = {
    pictures: [],
    page: 1,
    query: null,
    reqStatus: 'idle',
    showModal: false,
    modalImage: null,
  }

  handleFormSubmit = (searchQuery) => {
    this.setState({ query: searchQuery, page: 1, pictures: [] })
  }

  pageIncrease = () => {
    this.setState({ page: this.state.page + 1 })
  }

  // toggleModal = (e) => {
  //   this.setState({ showModal: !this.state.showModal })
  // }

  openModal = (data) => {
    this.setState({ showModal: true, modalImage: data })
  }

  closeModal = () => {
    this.setState({ showModal: false, modalImage: null })
  }

  // closeModal = (e) => {
  //   console.log(e.code)
  //   if (e.currentTarget === e.target || e.code === 'Escape') {
  //     this.toggleModal()
  //   }
  // }

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state

    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ reqStatus: 'pending' })
      const images = await fetchImages(query, page)
      this.setState((prevState) => ({
        pictures: [...prevState.pictures, ...images],
        reqStatus: 'resolved',
      }))
    }

    if (page > 1) {
      const scroll = () =>
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        })
      setTimeout(scroll, 500)
    }
  }

  render() {
    const { pictures, reqStatus, showModal } = this.state
    const showSearchButton = pictures.length > 0
    return (
      <div className="App">
        <SearchBar onSearch={this.handleFormSubmit}></SearchBar>
        <ImageGallery
          picturesData={pictures}
          toggleModal={this.openModal}
        ></ImageGallery>
        {reqStatus === 'pending' && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}

        {showSearchButton && <Button onClick={this.pageIncrease}></Button>}
        {showModal && (
          <Modal
            onClose={this.closeModal}
            onOpen={this.state.modalImage}
          ></Modal>
        )}
      </div>
    )
  }
}
