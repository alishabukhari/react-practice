import { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion'
import CharacterCounter from './components/CharacterCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Accordion />
      <CharacterCounter />
    </div>
  )
}

export default App
