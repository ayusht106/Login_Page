import {Route, Routes } from 'react-router-dom';
import Log from './Components/Log';
import Home from './Components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Log/>} /> 
      <Route path="/home" element={<Home />} /> 
    </Routes>
    </div>
  );
}

export default App;
