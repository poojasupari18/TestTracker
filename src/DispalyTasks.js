import React from 'react'
import App from './App'
 import {FaTimes} from "react-icons/fa"

function DispalyTasks({tasks , onDelete}) {
  return (
    <div>
     <h2> Task List</h2>
        
     { tasks.map((task)=> (
          <button className='displaytaskbtn' key = {task.id}>   {task.name}  <FaTimes  onClick={(e) => onDelete(task.id)}/></button> 
          
      ))}

      {/* {tasks.map((task) =>{
          console.log(task)
      })}

      {console.log(tasks)} */}
    </div>
  )
}

export default DispalyTasks
