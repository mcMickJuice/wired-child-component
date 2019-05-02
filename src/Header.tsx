import React from 'react'

interface Props {
  id: string
  header: string
}

const Header = ({ header }: Props) => {
  return (
    <h1 className="storyblock-header" data-highlightid="global-header">
      {header}
    </h1>
  )
}

export default Header
