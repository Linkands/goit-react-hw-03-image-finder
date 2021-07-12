import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

function ImageGallery({ picturesData, toggleModal }) {
  return (
    <ul className="ImageGallery">
      {picturesData.map((picture) => (
        <ImageGalleryItem
          key={picture.id}
          picture={picture}
          toggleModal={toggleModal}
        ></ImageGalleryItem>
      ))}
    </ul>
  )
}

export default ImageGallery
