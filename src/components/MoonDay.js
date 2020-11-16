import React , {Component} from 'react';
import '../style/moonday.css'
import ellipse2 from '../images/Ellipse2.png';
import Lampcol from "../images/Lampcol.png";
import Modal from 'react-awesome-modal';
class MoonDay extends Component{
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
    render(){
        return(
            <div className="moon-day">
                <div className="text">
                    <h2 className="text-day">วันไหว้พระจันทร์(中秋节)</h2>
                    <img src={Lampcol} id="lamp" />
                    <p className="day">วันไหว้พระจันทร์</p>
                    <p className="day">เป็นเทศกาลตามวัฒนธรรมจีน</p>
                    <p className="day">ที่มีขึ้นในกลางฤดูใบไม้ร่วง</p>
                    <p className="day">เพื่อเฉลิมฉลองการเก็บเกี่ยวจะมีขึ้นใน</p>
                    <p className="day">คืนวันเพ็ญเดือน 8 ตามปฏิทินจันทรคติ...</p>
                    <hr/>
                    <div class="w3-container">
                <p><button class="w3-button w3-blue  w3-round-large" onClick={() => this.openModal()}>อ่านเพิ่มเติม</button></p>
                        <Modal visible={this.state.visible} width="300" height="230" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                            <div>

                            </div>
                        </Modal>
                </div>
                </div>
                
                    <img src={ellipse2} id="ellipse2" width="75%"/>
                
            </div>
            
        )
    }
}
export default MoonDay;