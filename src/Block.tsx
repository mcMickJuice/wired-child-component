import React from 'react'

interface Props {
  id: string
  imageUrl: string
  header: string
  subheader: string
}

const Block = ({ imageUrl, header, subheader }: Props) => {
  return (
    <div className="section section-1">
      <div className="image-container">
        <img
          height="250"
          width="250"
          className="section-image"
          src={imageUrl}
        />
      </div>
      <div className="section-headline">{header}</div>
      <div className="section-subhead">{subheader}</div>
    </div>
  )
}

export default Block
