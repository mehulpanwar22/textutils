import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark Mode Enabled", "success")
      document.title = 'TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now'
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
  <>
  {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
  {/* <Navbar/> */}
  <Router>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/> 
    <div className="container my-3">
      <Routes>    
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text below to Analyze " mode={mode}/>}/>
        <Route exact path="/about" element={<About />}/>
      </Routes>
    </div>
  </Router>
  </>
  );
}

export default App;