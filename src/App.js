import '../node_modules/aos/dist/aos.css';
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import Legend from './components/Legend';
import Mooncake from './components/Mooncake';
function App() {

  return (
    <div className="App">
        <Menu/>
        <Home/>
        <Legend/>
        <Mooncake/>
    </div>
  );
}

export default App;
