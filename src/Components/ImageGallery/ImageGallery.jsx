import React from 'react'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

function ImageGallery({ picturesData }) {
  return (
    <ul className="ImageGallery">
      {picturesData.map((picture) => (
        <ImageGalleryItem key={picture.id} picture={picture}></ImageGalleryItem>
      ))}
    </ul>
  )
}

export default ImageGallery
