import React from 'react'

function ImageGalleryItem({ picture, toggleModal }) {
  return (
    <>
      <li key={picture.id} className="ImageGalleryItem">
        <img
          src={picture.webformatURL}
          alt={picture.tags}
          className="ImageGalleryItem-image"
          onClick={() => toggleModal(picture.largeImageURL)}
        />
      </li>
    </>
  )
}

export default ImageGalleryItem
