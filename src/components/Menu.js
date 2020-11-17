import React , {Component} from 'react';
import MenuLogo from '../images/logow1.png';
import '../style/navbar.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/responsive.css'
class Menu extends Component{
    render(){
        return(
            <nav className="clearfix">
                <ul>
                    <li><a href="#home">หน้าแรก</a></li>
                    <li><a href="#legend">ตำนานฉางเอ๋อ</a></li>
                    <li><a href="#moonday">วันไหว้พระจันทร์</a></li>
                    <li><a href="#home"><img src={MenuLogo} id="menu-logo"/></a></li>
                    <li><a href="#mooncake-page">ขนมไหว้พระจันทร์</a></li>
                    <li><a href="#festival">พิธี</a></li>
                    <li><a href="#rabbit">กระต่ายบนจันทร์</a></li>

                </ul>
            </nav>
        );
    }
}
export default Menu;