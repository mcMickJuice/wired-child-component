import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import StoryBlock from './Storyblock'
import StateContext, { StateContextProvider } from './StateContext'
import { subscribeToHighlight } from './messageListener'

const initialComponentData = {
  header: {
    id: 'header',
    header: 'New at Target'
  },
  sections: [
    {
      id: 'section-1',
      imageUrl:
        '//target.scene7.com/is/image/Target/Baxter168545-190319_1553004845762?wid=720&qlt=60&fmt=webp',
      header: 'Blue Wilderness pet food & treats',
      subheader: 'High protein'
    },
    {
      id: 'section-2',
      imageUrl:
        '//target.scene7.com/is/image/Target/Opalhouse_2168545-190319_1553004815885?wid=720&qlt=60&fmt=webp',
      header: 'Opalhouse',
      subheader:
        "New, affordable decor that looks like you've been around the world"
    },
    {
      id: 'section-3',
      imageUrl:
        '//target.scene7.com/is/image/Target/Auden168545-190313_1552509736086?wid=720&qlt=60&fmt=webp',
      header: 'Fit for you in every way',
      subheader: 'Intimates'
    }
  ]
}

function App() {
  React.useEffect(() => {
    subscribeToHighlight()
  }, [])
  return (
    <StateContextProvider initialState={initialComponentData}>
      <StateContext.Consumer>
        {({ componentData }) => {
          return <StoryBlock componentData={componentData} />
        }}
      </StateContext.Consumer>
    </StateContextProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
