import React , {Component} from 'react';
import MenuLogo from '../images/logow1.png';
import '../style/navbar.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Menu extends Component{
    render(){
        return(
            <nav className="clearfix">
                <ul>
                    <li><a href="#">หน้าแรก</a></li>
                    <li><a href="#">ตำนานฉางเอ๋อ</a></li>
                    <li><a href="#">วันไหว้พระจันทร์</a></li>
                    <li><a href="#"><img src={MenuLogo}/></a></li>
                    <li><a href="#">ขนมไหว้พระจันทร์</a></li>
                    <li><a href="#">พิธี</a></li>
                    <li><a href="#">กระต่ายบนจันทร์</a></li>
                </ul>
            </nav>
        );
    }
}
export default Menu;