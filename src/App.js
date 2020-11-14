import '../node_modules/aos/dist/aos.css';
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import Legend from './components/Legend';
import MoonDay from './components/MoonDay';
function App() {
  return (
    <div className="App">
        <Menu/>
        <Home/>
        <Legend/>
        <MoonDay/>
    </div>
  );
}

export default App;
