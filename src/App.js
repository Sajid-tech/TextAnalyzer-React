import './App.css';
import Alert from './componets/Alert';
import About from './componets/About';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
import React, { useState } from 'react';
// react router dom
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";


function App() {

  const[mode , setMode]= useState('light') // wheather dark mode is enabled or not
  const[alert,setAlert]=useState(null)  ///alert use State
  const showAlert =(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }

// dark mode function
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#092545'
      showAlert("dark mode has been enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("light mode has been enabled","success")
    }
  }

  return (
    <>
    <Router>
     
    {/* <Navbar  title="TextAnalyzer" aboutText="About TextAnalyzer" /> */}
    <Navbar title="TextAnalyzer" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
    <div className="container my-3">
    <Routes>
    
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
              
        
            {/* <Route exact path="/about">
             <About/>
            </Route> */}
            <Route exact path="/about" element={<About />} />
          
            

    
    </Routes>
    </div>
   
    </Router>
   
    </>
    
  );
}

export default App;
