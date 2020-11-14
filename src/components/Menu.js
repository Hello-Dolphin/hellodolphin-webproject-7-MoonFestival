import React , {Component} from 'react';
import MenuLogo from '../images/logow1.png';
import '../style/style.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
class Menu extends Component{
    render(){
        return(
            <div className="menu">
                <div className="row" >
                    <div className="col"></div>
                    <div className="col">
                        <h1>Home</h1>
                    </div>
                    <div className="col">
                        <h1>ตำนานฉางเอ๋อ</h1>
                    </div>
                    <div className="col">
                        <h1>วันไหว้พระจันทร์</h1>
                    </div>
                    <div className="col">
                        <img src={MenuLogo} id="menu-logo"/>
                    </div>
                    <div className="col">
                        <h1>ขนมไหว้พระจันทร์</h1>
                    </div>
                    <div className="col">
                        <h1>พิธีไหว้พระจันทร์</h1>
                    </div>
                    <div className="col">
                        <h1>กระต่ายบนจันทร์</h1>
                    </div>
                </div>
            </div>
        )
    }
}
export default Menu;