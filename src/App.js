import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
//import React, {useState} from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light');
  
 const[alert, setAlert]=useState(null);
 const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
 }
 const toggleMode=()=>{
  if (mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled ", "success");
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("light mode has been enabled ", "success");

  }
  
 }
	return (
		<>
    <Router>
			<Navbar title="TextUtils"  mode ={mode} toggleMode={toggleMode}/>
      
      <Alert alert = {alert}/>  
      
			<div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/> 
          </Route>
        </Switch>
      </div>
    </Router>
 
		</>
	);
}

export default App;
