import React, {Component} from 'react';
import Menu from './components/Menu';
import Home from './components/Home';
import Legend from './components/Legend';
import MoonDay from './components/MoonDay';
import Mooncake from './components/Mooncake';
import Festival from './components/Festival';
import LastPage from './components/LastPage';
class MoonFestival extends Component {
    render(){
    return (
        <div>
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
}

export default MoonFestival;
