import React, { Component } from 'react';
import '../style/cake.css';
import Ellipse1 from '../images/Ellipse1.png';
import Lampcol from '../images/Lampcol.png';
import 'bootstrap/dist/css/bootstrap-grid.css';
class Mooncake extends Component {
    render() {
        return (
            <div className="moon">
                <div className="mooncake">
                    <img src={Ellipse1} id="mooncake" />
                </div>
                <div>
                    <h1 className="mis-lang">ขนมไหว้พระจันทร์<span className="mis-langed">(月饼)</span></h1>
                    <img src={Lampcol} id="lamp" />
                    <p>เป็นขนมที่มีต้นตำรับมาจากประเทศจีน</p>
                    <p>เป็นสัญลักษณ์แห่งความเป็นสิริมงคล</p>
                    <p>ความปรารถนาดี และความสามัคคี </p>
                    <p>ขนมไหว้พระจันทร์ของจีนดั้งเดิม...</p>
                    <hr/>
                     <div class="w3-container">
                <p><button class="w3-button w3-blue  w3-round-large">อ่านเพิ่มเติม</button></p>
                </div>
                </div>

            </div>
        );
    }
}
export default Mooncake;
