import React from 'react'
import "./App.css"
import App from './App'
import {useState} from "react"
function Header({onadd}) {

// const [showtask , setShowTask] = useState("true")

// const checktoggle =  ()=>{
//          setShowTask(!showtask)

//          toggleshowtask(showtask)
//      }
     
  return (
    <div className='header'>
        <h1 className='taskheader'>Test Tracker</h1>
         <p className='header-addtask'>Add Task ? <input  className='showtask' type = "checkbox"  onClick={onadd} /> </p>
  
    </div>
  )
}

export default Header
