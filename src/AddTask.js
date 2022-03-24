import React from 'react'
import {useState} from "react"
import "./App.css"

function AddTask({addtask , incid , rank}) {

    const [name, setName] = useState("")
    const [id , setId] = useState("")

    const onsubmit = (e) =>{
        e.preventDefault()
        setName(name)
        incid()
        addtask({rank,name})
        console.log(rank)
        
    }

  return (
    <div className='AddTask'>
        <form onSubmit={onsubmit} className="AddTask-form">
        <input required type = "text"  placeholder='Add your Task' onChange={(e)=>{setName(e.target.value)}} />
        {/* <input type="number" onChange={(e)=>{setId(e.target.value)}} min="0" max="30"  name='quantity'></input> */}
        <input type="submit" value="Submit"></input>
        </form>
    </div>
  )
}

export default AddTask
