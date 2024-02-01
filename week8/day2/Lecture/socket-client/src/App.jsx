import { useState, useEffect} from 'react'
import io from 'socket.io-client';
import './App.css'

function App() {
  // notice that we pass a callback function to initialize the socket
  // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
  const [socket] = useState(() => io(':8000'));
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])



  useEffect(() => {
    console.log('connected');
    socket.on('connect', () => {
      console.log(socket.id);
      setIsConnected(true)
    })

    // Listening for new message
    socket.on('new-message', (data) => {
      console.log(data);
      setMessages((prevState) => [...prevState, data])
    })

    return () => {
      socket.disconnect(true)
      setIsConnected(false)
    }
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    socket.emit('send-message', message)
    setMessage('')
  }
  return (
    <>
      <h1>Socket IO</h1>
      <form onSubmit={submitHandler}>
        <label>Message:</label>
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button>Send Message</button>
      </form>
      {
        messages.map((message) => (
          <div>
            <p>{message}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
