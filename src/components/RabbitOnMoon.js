import React, { Component } from 'react';
import '../style/fest.css';
import Ellipse4 from '../images/Ellipse4.png' ;
import popup4 from "../images/popup4.png";
import Modal from "react-awesome-modal";
import '../style/popup.css';
import Lampcol from '../images/Lampcol.png';
class Festival extends Component {
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
                <div className="moonfest-right" id="rabbit">
                    <h1 className="festmoon">กระต่ายบนดวงจันทร์</h1>
                    <h1 className="festedmoon">(月兔)</h1>
                    <img src={Ellipse4} alt="Ellipse4" width="75%"/>
                    <div>
                        <img src={Lampcol} id="lamp" />
                        <p>ตำนานกระต่ายบนดวงจันทร์</p>
                        <p>เล่าว่า มีอยู่ปีหนึ่งในเมืองปักกิ่ง</p>
                        <p>เกิดโรคอหิวาระบาดหนัก</p>
                        <p>เมื่อเทพธิดาฉางเอ๋อซึ่ง</p>
                        <p>อยู่บนดวงจันทร์ได้มองลงมาเห็น...</p>
                        <hr></hr>
                    </div>

                    <div class="w3-container">
                        <p><button class="w3-button w3-black  w3-round-large" onClick={() => this.openModal()}>อ่านเพิ่มเติม</button></p>
                        <Modal visible={this.state.visible} width="938" height="746" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                            <div classname="popup4">
                                <img src={popup4} id="popup4"/>
                            </div>
                        </Modal>
                    </div>
            </div>
        );

    }
}
export default Festival;