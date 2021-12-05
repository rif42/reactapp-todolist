import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'

function App() 
{
  // const Aranio = [
  //   {fecalcoli:822.75},
  //   {TSS:6},
  //   {BOD:5.7875},
  //   {COD:56.71825},
  //   {DO:6.5375},
  //   {pH:7.315},
  //   {N:0.33625},
  //   {PO:0.38905}
  // ]

  // const test = Aranio.map(yoink);
  // function yoink(item){
  //   return [Object.entries(item)];
  // }

  //hide add task form
  const [showAddTask, setShowAddTask] = useState(false)

  //delete task

  const [tasklist, setTasks] = useState(
    [
        {
          id:1,
          objective : "Last hit lane creeps",  
          minute : 5,
          lasthit : 120,
          reminder : true
        },
        {
          id:2,
          objective : "Farm jungle",  
          minute : 10,
          lasthit : 80,
          reminder : false
        },
        {
          id:3,
          objective : "Get key items",  
          minute : 20,
          lasthit : 150,
          reminder : true
        }
    ]
  )
  
  //add task
  function addTask(task){
    const id = Math.floor(Math.random()*1000)+1
    const newTask = {id, ...task}
    setTasks([...tasklist, newTask])
  }

  //deleting task
  function deleteTask(index) {
    setTasks(tasklist.filter((task) => task.id !== index))
  }

  //toggle reminder
  function toggleReminder(index){
    setTasks(tasklist.map((task)=>task.id === index 
    ? {...task, reminder: !task.reminder } 
    : task))
  };

  let tasklistjson = JSON.stringify(tasklist);
  localStorage.setItem('data',tasklistjson);
  
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}
      title="Dota Task Tracker"/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasklist.length > 0 
      ? (<Tasks tasklist={tasklist} onDelete={deleteTask} onToggle={toggleReminder}/>) 
      : ( "Error 404 tasks not found")}
    </div>
  )
}
    
export default App;