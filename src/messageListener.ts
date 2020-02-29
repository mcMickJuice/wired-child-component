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

export function subscribeToHighlight() {
	function listener(evt: any) {
		if (evt.data) {
			const message = JSON.parse(evt.data) as any

			if (message == null || message.type !== 'highlight') return

			const { action, selector } = message

			if (action === 'focus') {
				addShader(selector)
			} else {
				removeShader()
			}
		}
	}

	const shadingDiv = document.createElement('div') as any
	shadingDiv.classList.add('shader')
	document.body.appendChild(shadingDiv)

	function addShader(selector: string) {
		const s = `[data-highlightid=${selector}]`
		const el = document.querySelector(s)

		const { left, top, width, height } = el!.getBoundingClientRect()

		const styleString = `left: ${left}px; top: ${top}px; width: ${width}px; height: ${height}px;`

		shadingDiv.style = styleString
	}

	function removeShader() {
		shadingDiv.style = ''
	}

	window.addEventListener('message', listener)

	return function unsub() {
		window.removeEventListener('message', listener)
	}
}

export function subscribeToComponentUpdate(cb: (data: ComponentData) => void) {
	function messageListener(evt: any) {
		// change this to data once we're all set
		if (evt.data) {
			const message = JSON.parse(evt.data) as any

			if (message == null || message.type !== 'ce') return

			const componentData = message.componentData as ComponentData

			cb(componentData)
		}
	}

	window.addEventListener('message', messageListener)

	return function unsubscribe() {
		window.removeEventListener('message', messageListener)
	}
}

export function sendReadyToParent(message: string) {
  console.log("ready to parent", message);
  window.parent.postMessage(
    {
      type: "confirmation",
      message
    },
    "*"
  );
}
