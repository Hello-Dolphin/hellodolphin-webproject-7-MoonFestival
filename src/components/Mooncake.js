import React, { Component } from 'react';
import '../style/cake.css';
import Ellipse1 from '../images/Ellipse1.png';
import Lampcol from '../images/Lampcol.png';
class Mooncake extends Component {
    render() {
        return (
            <div className="moon">
                <div>
                    <h1 className="mis-lang">ขนมไหว้พระจันทร์<span className="mis-langed">(月饼)</span></h1>
                    </div>
                    <div className="mooncake">
                        <img src={Ellipse1} id="mooncake" />
                        <img src={Lampcol} id="lamp" />
                        <p>ขนมไหว้พระจันทร์</p>
                        <p className="name">เป็นขนมที่มีต้นตำรับมาจากประเทศจีน เป็นสัญลักษณ์แห่งความเป็นสิริมงคล ความปรารถนาดี และความสามัคคี  ขนมไหว้พระจันทร์ของจีนดั้งเดิม...</p>
                        <hr></hr>
                        <button className="button2">อ่านเพิ่มเติม</button>
                </div>
            </div>
        );
    }
}
export default Mooncake;
