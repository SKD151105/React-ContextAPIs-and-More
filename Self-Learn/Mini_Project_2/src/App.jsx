// import { useState } from 'react'
import './App.css'
import PasswordGenerator from './components/Container.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <p className="text-2xl font-bold text-center my-4 text-green-300">Get your Unique Password!</p>
      <PasswordGenerator />
    </>
  )
}

export default App
