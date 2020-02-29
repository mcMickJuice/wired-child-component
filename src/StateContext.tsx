import React from 'react'
import { ComponentData } from './type'
import { 
  subscribeToComponentUpdate,
       sendReadyToParent} 
from './messageListener'

interface Props {
  initialState: ComponentData
  children: React.ReactNode
}

interface ContextType {
  componentData: ComponentData | undefined
}

const StateContext = React.createContext<ContextType>({
  componentData: undefined
})

export const StateContextProvider = ({ initialState, children }: Props) => {
  const [componentData, setComponentData] = React.useState<ComponentData>(
    initialState
  )

  React.useEffect(() => {
    const unsub = subscribeToComponentUpdate(data => {
      setComponentData(data)
    })

    sendReadyToParent("State Context has mounted");
    return unsub
  }, [])

  return (
    <StateContext.Provider value={{ componentData }}>
      {children}
    </StateContext.Provider>
  )
}

export default StateContext
