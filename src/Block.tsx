import React from 'react'

interface Props {
  id: string
  imageUrl: string
  header: string
  subheader: string
}

const Block = ({ id, imageUrl, header, subheader }: Props) => {
  return (
    <div className="section">
      <div className="image-container" data-highlightid={`${id}-image`}>
        <img
          height="250"
          width="250"
          className="section-image"
          src={imageUrl}
        />
      </div>
      <div className="section-headline" data-highlightid={`${id}-header`}>
        {header}
      </div>
      <div className="section-subhead" data-highlightid={`${id}-subheader`}>
        {subheader}
      </div>
    </div>
  )
}

export default Block
