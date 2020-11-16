import React,{Component} from 'react';
import '../style/last.css'
import lastpic from '../images/background5.png'
class LastPage extends Component{
    render(){
        return(
            <div classname="last-page">
              <img src={lastpic}/>
            </div>
        )
    }
}
export default LastPage;
