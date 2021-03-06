import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import Legend from './components/Legend';
import MoonDay from './components/MoonDay';
import Mooncake from './components/Mooncake';
import Festival from './components/Festival';
import LastPage from './components/LastPage';
import React from "react";
function App() {
  return (
    <div className="App">
        <Menu/>
        <Home/>
        <Legend/>
        <MoonDay/>
        <Mooncake/>
        <Festival/>
        <LastPage/>
    </div>
  );
}

export default App;
