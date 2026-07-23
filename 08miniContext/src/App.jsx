import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Chai with React</h1>
      <Profile/>
      <Login/>
    </UserContextProvider>
  )
}

export default App
