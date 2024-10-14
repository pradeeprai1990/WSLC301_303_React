import React, { useState } from 'react'
import { questions } from './Data/FaqQuestion'

export default function Faq() {
  let [currentId,setCurrentId]=useState(questions[0].id)   //2
  return (
    <div className='max-w-[1320px] mx-auto py-4'>
        <h1 className='text-[30px] font-bold mb-5'>Faq</h1>

        {
            questions.map((items,index)=>{
                return(
                 <div className='border-2 mb-3'>
                    <h3 onClick={()=>setCurrentId(items.id)} className='text-left p-[15px] cursor-pointer bg-red-400'>
                        {items.question}
                    </h3>
                    <p className={`text-left duration-200 ${items.id==currentId ? `p-[10px] max-h-[500px] overflow-y-visible` : 'max-h-[0px] overflow-y-hidden' }`}>
                         {items.answer}
                    </p>
                 </div>
                )
            })
        }
       

       
    </div>
  )
}
