import React from 'react'

function ImageGalleryItem({ picture }) {
  return (
    <>
      <li key={picture.id}>
        <img src={picture.webformatURL} alt={picture.tags} />
      </li>
    </>
  )
}

export default ImageGalleryItem
