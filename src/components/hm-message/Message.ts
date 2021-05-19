import { createApp } from 'vue'
import Message from './Message.vue'

interface Options {
  message: string;
  type: string;
}

function createMessage (message:string, type:string) {
  console.log(message, type)
  const messageInstance = createApp(Message, {
    message,
    type
  })

  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)
  messageInstance.mount(mountNode)

  setTimeout(() => {
    messageInstance.unmount()
    document.body.removeChild(mountNode)
  }, 2000)
}

export default createMessage
