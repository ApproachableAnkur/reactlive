import logo from './logo.svg';
import './App.css';
import React from 'react'
import Bootstr from './Bootstr';
import Getapi from './Getapi';
import Postapi from './Postapi';
import Home from './Home';
import About from './About';
import { Switch ,Route,Link} from 'react-router-dom';
import Namform from './Namform';
function App() {
  return (
    <div className="App">
     <Namform />
    </div>
  );
}

export default App;
