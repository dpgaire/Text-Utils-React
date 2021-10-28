import './App.css';
import NavBar from './components/NavBar'
import TextForm from './components/TextForm'
import About from './components/About'
import React, { useState } from 'react'
import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


function App() {
  const [mode,setMode]=useState('white')
  const [alert,setAlert]=useState(null)
  const [gradinatMode,setGradinatMode]=useState('green');

  const gradiantMode=()=>{
    if(gradinatMode==='green')
    {
       setGradinatMode('yellow')
       document.body.style.backgroundColor='yellow';
       showAlert("Gradiant mode enabled","success")
      
    }
    else{
       setGradinatMode('green')
       document.body.style.backgroundColor='green';
      showAlert("Normal gradiant mode enabled","success")
    }
  }
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },1500)
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-info')
    document.body.classList.remove('bg-warning')
  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if(mode==='white')
    {
       setMode('dark')
       document.body.style.backgroundColor='black';
       showAlert("Dark mode enabled","success");
       document.title="TextUtils - Dark Mode";
      
    }
    else{
       setMode('white')
       document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success")
      // setTimeout(() => {
      //   document.title="TextUtils - Light Delay Mode";
      // },2000)
      // setTimeout(() => {
      //   document.title="TextUtils - Light Mode";
      // },4000)
      document.title="TextUtils - Light Mode";
    }
  }
  
  return (
    <>
    <Router>
      <NavBar 
      mode={mode}
      toggle={toggleMode}
      toggleGradiant={gradiantMode}
      />
      <Alert alert={alert}/>
      
      {/* <About/> */}
      <Switch>
        <Route exact path="/">
          <TextForm
            mode={mode}
            showAlert={showAlert}
            title="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
          />
        </Route>
        <Route exact path="/about">
          <About mode={mode}/>
        </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
