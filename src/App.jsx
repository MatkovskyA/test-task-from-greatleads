import { useState } from 'react'
import './App.css'
import { Wrapper } from './components/wrapper/Wrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Wrapper>
      {/* Header */}
      <h1>Hello world</h1>
      {/* Footer */}
    </Wrapper>
  )
}

export default App
