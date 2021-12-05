import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/about';


function App() 
{
  // const message = "forty two"
  // const person = {
  //   nama:'rif',
  //   age:'21',
  //   vac:'sinovac'
  // }

  // const datamurid = [
  //   {
  //     nama:'eyeroom',
  //     sekolah:'smkn1cimahi',
  //     kelas:'12'
  //   },
  //   {
  //     nama:'hydromonitoring',
  //     sekolah:'smkkutai',
  //     kelas:'11'
  //   },
  //   {
  //     nama:'elearning',
  //     sekolah:'smk2jkt',
  //     kelas:'12'
  //   }
  // 

  //hide add task form
  const [showAddTask, setShowAddTask] = useState(false)

  //delete task
  
  const [tasklist, setTasks] = useState(
    [
        {
          id:1,
          objective : "Lasthit",  
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
          objective : "Get items",  
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
  }

  return (
    <Router>
    <div className="container">
      <ul>
        <li>
          <Link to="/">MainApp</Link>
        </li>
        <li>
          <Link to="./pages/about">About</Link>
        </li>
        <li>
          <Link to="./buku tamu">BukuTamu</Link>
        </li>
      </ul>

      <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Switch>
        <Route exact path="/">
          <p>bruh</p>
        </Route>
        <Route path="/pages/about">
          <About />
        </Route>
        <Route path="./buku tamu.html">
          <p>bruh</p>
        </Route>
      </Switch>

      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}
      title="Dota Task Tracker"/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasklist.length > 0 
      ? (<Tasks tasklist={tasklist} onDelete={deleteTask} onToggle={toggleReminder}/>) 
      : ( "Error 404 tasks not found")}
    </div>
    </Router>
  )
}
    
export default App;