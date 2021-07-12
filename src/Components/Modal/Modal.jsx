// import React from 'react'

// function Modal({ largeImageURL, tags, onBackdropClick }) {
//   return (
//     <div className="Overlay" onClick={onBackdropClick}>
//       <div className="Modal">
//         <img src={largeImageURL} alt={tags} />
//       </div>
//     </div>
//   )
// }

// export default Modal

import React, { Component } from 'react'

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onImageClick)
  }

  onImageClick = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onImageClick)
  }

  onBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose()
    }
  }

  render() {
    return (
      <div className="Overlay" onClick={this.onBackdropClick}>
        <div className="Modal">
          <img src={this.props.onOpen} alt={this.props.onOpen} />
        </div>
      </div>
    )
  }
}
