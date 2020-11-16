import React,{Component} from 'react';
import '../style/last.css'
import lastpic from '../images/background5.png'
import '../style/resmooncake.css';
class LastPage extends Component{
    render(){
        return(
            <div classname="last-page">
              <img src={lastpic} id="lastpic"/>
            </div>
        )
    }
}
export default LastPage;
