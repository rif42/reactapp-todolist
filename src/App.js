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
  var Aranio = [
    "Aranio" ,
    "822,75", 
    "6" , 
    "5,7875", 
    "56,71825", 
    "6,5375", 
    "7,315",
    "0,33265",
    "0,389075",
    ];
  localStorage.setItem("AR",JSON.stringify(Aranio));
  
  var KarangIntan = [
    "Karang Intan" ,
    "4475,25",
    "6,75" , 
    "13,5775", 
    "46,29775", 
    "7,23", 
    "7,34",
    "0,36825",
    "0,06825",
    ];
  localStorage.setItem("KI",JSON.stringify(KarangIntan));
  
  var SungaiKembang = [
    "Sungai Kembang" ,
    "5425",
    "6,75" , 
    "1,3075", 
    "20,892", 
    "9,4375", 
    "7,195",
    "0,3295",
    "0,056325",
    ];
  
  return (
    <div className="container">
      <p> Sungai Aranio </p>
      <p> fecal coli : {Aranio[1]}</p>
    </div>
  )
}

export default App;