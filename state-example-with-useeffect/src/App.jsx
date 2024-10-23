import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(1)
  let getData=()=>{
    console.log("welcome")
    console.log("Hello")
  }



  useEffect(()=>{
    if(count<=4){
      getData()
    }
   
  },[count])
  return (
    <>
        <h1>State1 {count} State2 {count1} </h1>
        <button onClick={()=>setCount(count+1)}>Change</button>
        <button onClick={()=>setCount1(count1+1)}>Change</button>
    </>
  )
}

export default App
