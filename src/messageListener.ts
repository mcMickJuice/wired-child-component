import { ComponentData } from './type'

// window.addEventListener(
//   'message',
//   evt => {
//     //TODO: CHECK URLLLLLLL
//     const data = JSON.parse(evt.data)

//     const { selector, type } = data

//     if (type === 'focus') {
//       addShader(selector)
//     } else if (type === 'blur') {
//       removeShader()
//     }

//     addMessage(`Message received ${evt.data}`)
//   },
//   false
// )

export function subscribeToComponentUpdate(cb: (data: ComponentData) => void) {
  function messageListener(evt: any) {
    // change this to data once we're all set
    const message = evt.data
    if (message == null || message.type !== 'ce') return

    const componentData = JSON.parse(message.componentData) as ComponentData

    cb(componentData)
  }

  window.addEventListener('message', messageListener)

  return function unsubscribe() {
    window.removeEventListener('message', messageListener)
  }
}
