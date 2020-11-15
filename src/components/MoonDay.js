import React , {Component} from 'react';
import '../style/moonday.css'
import ellipse2 from '../images/Ellipse2.png';
class MoonDay extends Component{
    render(){
        return(
            <div className="moon-day">
                <div className="text">
                    <h2>วันไหว้พระจันทร์(中秋节)</h2>
                    <p>วันไหว้พระจันทร์</p>
                    <p>เป็นเทศกาลตามวัฒนธรรมจีน</p>
                    <p>ที่มีขึ้นในกลางฤดูใบไม้ร่วง เพื่อเฉลิมฉลองการเก็บเกี่ยวจะมีขึ้นใน</p>
                    <p>คืนวันเพ็ญเดือน 8 ตามปฏิทินจันทรคติ...</p>
                    <hr/>
                    <button id="button">Button</button>
                </div>
                <div className="images">
                    <img src={ellipse2}/>
                </div>
            </div>
        )
    }
}
export default MoonDay;