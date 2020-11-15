import React , {Component} from 'react';
import MenuLogo from '../images/logow1.png';
import '../style/style.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Menu extends Component{
    render(){
        return(
            <div>
                <ul className="nav nav-pills nav-justified">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menu 1</a></li>
                    <li><a href="#">Menu 2</a></li>
                    <li><a href="#">Menu 3</a></li>
                    <li><a href="#">Menu 1</a></li>
                    <li><a href="#">Menu 2</a></li>
                    <li><a href="#">Menu 3</a></li>
                </ul>
            </div>
        )
    }
}
export default Menu;