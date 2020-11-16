import React, { Component } from 'react';
import '../style/cake.css';
import Ellipse1 from '../images/Ellipse1.png';
import Lampcol from '../images/Lampcol.png';
import 'bootstrap/dist/css/bootstrap-grid.css';
import popup2 from "../images/popup2.png";
import Modal from "react-awesome-modal";
import '../style/popup.css';
class Mooncake extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }
    render() {
        return (
            <div className="moon">
                <div className="mooncake">
                    <img src={Ellipse1} id="mooncake" />
                </div>
                <div className="text-moon">
                    <h1 className="mis-lang">ขนมไหว้พระจันทร์<span className="mis-langed">(月饼)</span></h1>
                    <img src={Lampcol} id="lamp" />
                    <p>เป็นขนมที่มีต้นตำรับมาจากประเทศจีน</p>
                    <p>เป็นสัญลักษณ์แห่งความเป็นสิริมงคล</p>
                    <p>ความปรารถนาดี และความสามัคคี </p>
                    <p>ขนมไหว้พระจันทร์ของจีนดั้งเดิม...</p>
                    <hr/>
                     <div class="w3-container">
                <p><button class="w3-button w3-blue  w3-round-large" onClick={() => this.openModal()}>อ่านเพิ่มเติม</button></p>
                         <Modal visible={this.state.visible} width="938" height="746" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                             <div classname="popup2">
                                 <img src={popup2} id="popup2"/>
                             </div>
                         </Modal>
                </div>
                </div>

            </div>
        );
    }
}
export default Mooncake;
