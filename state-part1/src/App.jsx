
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  
  let [passwordStatus,setPasswordStatus]=useState(false)

  let [count,setCount]=useState(1) 



  let chnageCount = () => {

    setCount(count+1)

  }



  return (
    <>

      <input type={  passwordStatus ? 'text' : 'password' } /> 
      <button onClick={()=>  setPasswordStatus(!passwordStatus) }>
        { passwordStatus ? 'hide' : 'show' }
      </button>

      <h1>  {count}  </h1>
      <button onClick={chnageCount} >Change Count</button>

      {/* <button onClick={ ()=> chnageCount(20,25) }> Function With params </button> */}
    </>
  )
}

export default App
