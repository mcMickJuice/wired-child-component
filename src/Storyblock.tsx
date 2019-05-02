import React from 'react'
import Header from './Header'
import Block from './Block'
import { ComponentData } from './type'

interface Props {
  componentData: ComponentData
}

const StoryBlock = ({ componentData }: Props) => {
  return (
    <div id="app" className="component">
      <Header {...componentData.header} />
      <div className="container">
        {componentData.sections.map(section => {
          return <Block key={section.id} {...section} />
        })}
      </div>
    </div>
  )
}

export default StoryBlock
