import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Faq from './Faq'

function App() {
  const [count, setCount] = useState(0)
  let [modalStatus,setModalStatus]=useState(false)
  return (
    <>
        <Faq/>

        
        <button onClick={()=>setModalStatus(true)}>Show Modal</button>

        <div className={`w-[500px] fixed h-[400px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl duration-500 
        ${ modalStatus ?  `top-[50%]`  :  `top-[-1000px]` } 
          
          `}>

          <h3 className='text-[30px] relative'>Enquire Now   <span onClick={()=>setModalStatus(false)} className='fixed right-0'>&times;</span></h3>
         
        </div>
    </>
  )
}

export default App
