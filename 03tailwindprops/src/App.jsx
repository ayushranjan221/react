import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "ayush",
    age:21
  }
  let newArr=[1,2,3,4];
  return (
    <>
    <h1 className='bg-green-400 text-red-500 p-4 rounded-xl'>tailwind test</h1>
   <Card username="chaiwithcode" />

    </>
  )
}

export default App
