import React, { Component } from 'react';
import '../style/fest.css';
import Ellipse3 from '../images/Ellipse3.png' ;
import '../style/resfestival.css';
import popup3 from "../images/popup3.png";
import Modal from "react-awesome-modal";
import '../style/popup.css';
import RabbitOnMoon from '../components/RabbitOnMoon'
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
            <div className="moonfest" id="festival">
                
                <div className="moonfest-left">
                    <h1 className="festmoon">พิธีไหว้พระจันทร์</h1>
                    <h1 className="festedmoon">(中秋拜月的仪式流程)</h1>
                    <img src={Ellipse3} alt="Ellipse3" width="75%"/>
                    <p>พิธีไหว้พระจันทร์</p>
                    <p>1. ตั้งโต๊ะไหว้บนพื้นที่โล่งที่</p>
                    <p>มองเห็นพระจันทร์ชัดเจน  เช่น</p>
                    <p>ลานหน้าบ้าน หรือดาดฟ้า</p>
                    <p>2. จัดเตรียมโต๊ะเพื่อตั้งของไหว้...</p>
                    <div class="w3-container">
                <p><button class="w3-button w3-black  w3-round-large" onClick={() => this.openModal()}>อ่านเพิ่มเติม</button></p>
                        <Modal visible={this.state.visible} width="938" height="746" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                            <div classname="popup3">
                                <img src={popup3} id="popup3"/>
                            </div>
                        </Modal>
                </div>
                </div>
                <RabbitOnMoon/>
                
            </div>
            );

        }
    }
    export default Festival;