import './App.css';
import Header from './Header';
import {useState} from "react"
import DispalyTasks from './DispalyTasks';
import AddTask  from './AddTask';

function App() {


  const  [tasks, setTasks] = useState( [ {id : 0, name : "Buy a car"},
                                       {id : 1 , name : "Buy groceries"}
                                      ])

  const [ id , setId] = useState(2);


  const [showtask, setShowTask] = useState(false)
  const addtask = ({rank , name}) =>{
    const newtask = { id , name}

    setTasks([...tasks , newtask])
    
    
      
    

  }  
  console.log(tasks)
  
  const onDelete = (newrank)=>{
    console.log(newrank)

  let newtask = tasks.filter( (task) => task.id !== newrank
  )
  setTasks(newtask)

  }
  const incid = ()=>{
    setId(id+1)
    
  }

  
  return (
    <div className="App">



      <Header  onadd = { () =>setShowTask(!showtask)} />
      { tasks.length > 0 ? <DispalyTasks tasks = {tasks} onDelete = {onDelete}   /> : <p>"NO Tasks"</p> }
      {showtask && <AddTask addtask = {addtask} incid = {incid}  rank={id}  />}
      
    </div>
  );
}

export default App;
