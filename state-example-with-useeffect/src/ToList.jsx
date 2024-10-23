import React, { useEffect, useState } from 'react'
import "./LoDoList.css"
export default function ToList() {
  let [allTodo,setAllTodo]=useState( JSON.parse(localStorage.getItem("TODOITEMS")) ?? [] )
  let handleToDo=(event)=>{
    let userItems=event.target.userData.value;
    
    // let oldData=[...allTodo]
    // oldData.push(userItems)
  
    let oldData=[...allTodo,userItems] 
   
    setAllTodo(oldData)

    event.preventDefault();
    event.target.reset()
  }  
 
  let delData=(delIndex)=>{
    let oldData=[...allTodo]
    oldData.splice(delIndex,1)
    setAllTodo(oldData)
  }

  useEffect(()=>{
       localStorage.setItem("TODOITEMS",JSON.stringify(allTodo)) 
  },[allTodo])
  return (
    <div>
         <h1>To Do List</h1>
        <form action="" onSubmit={handleToDo}>
            <input type="text" name='userData' /> 
            <button>Save</button>
        </form>


       <div className='toDoItems'>
            <ul>
                {allTodo.length>=1
                    ?
                    allTodo.map((items,index)=>{
                        return(
                            <li> {index+1} {items} <span onClick={()=>delData(index)}>&times;</span>  </li>
                        )
                    })
                    :
                    <li>No Items Found</li>
                }
                
            </ul>
        </div>     

    </div>
  )
}
