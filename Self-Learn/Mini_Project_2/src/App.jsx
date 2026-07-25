// import { useState } from 'react'
import './App.css'
import PasswordGenerator from './components/Container.jsx'
import CurrencyConverter from './components/CurrencyConverter.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <p className="text-2xl font-bold text-center my-4 text-green-200">Get your Unique Password!</p>
      <PasswordGenerator />
      <p className="text-2xl font-bold text-center mt-10 my-4 text-green-200">Check your Currency Value!</p>
      <CurrencyConverter />
    </>
  )
}

export default App
