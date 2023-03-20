import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
//import React, {useState} from 'react';

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
			<Navbar title="TextUtils"  mode ={mode} toggleMode={toggleMode}/>
      
      <Alert alert = {alert}/>
    
      <About/>
			<div className="container my-3">
				<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/> 
			</div>
		</>
	);
}

export default App;
