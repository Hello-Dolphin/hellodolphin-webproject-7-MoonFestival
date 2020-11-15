import React , {Component} from 'react';
import '../style/moonday.css'
import ellipse2 from '../images/Ellipse2.png';
class MoonDay extends Component{
    render(){
        return(
            <div className="moon-day">
                <div className="text">
                    <h2 className="text-day">วันไหว้พระจันทร์(中秋节)</h2>
                    <p>วันไหว้พระจันทร์</p>
                    <p>เป็นเทศกาลตามวัฒนธรรมจีน</p>
                    <p>ที่มีขึ้นในกลางฤดูใบไม้ร่วง เพื่อเฉลิมฉลองการเก็บเกี่ยวจะมีขึ้นใน</p>
                    <p>คืนวันเพ็ญเดือน 8 ตามปฏิทินจันทรคติ...</p>
                    <hr/>
                    <div class="w3-container">
                <p><button class="w3-button w3-blue  w3-round-large">อ่านเพิ่มเติม</button></p>
                </div>
                </div>
                <div className="images">
                    <img src={ellipse2} id="ellipse2"/>
                </div>
               
            </div>
            
        )
    }
}
export default MoonDay;