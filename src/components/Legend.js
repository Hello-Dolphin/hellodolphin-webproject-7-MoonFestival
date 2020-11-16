import React, { Component } from 'react';
import '../style/miss.css';
import missed from '../images/missed.png';
import Lampcol from '../images/Lampcol.png';
class Legend extends Component {
    render() {
        return (
            <div className="missed">
                <div className="chang">
                <h1 className="miss-lang">ฉางเอ๋อ <span className="mis-lang-lang">(嫦娥)</span></h1>
                <img src={missed} id="miss" />
                </div>
                <img src={Lampcol} id="lamp" />
                    <p>ตำนานของเทศกาลไหว้พระจันทร์</p>
                    <p className="write">เกี่ยวกับเทพปกรณัมจีนที่เล่าถึงเทพธิดาแห่งดวงจันทร์ ที่ชื่อ “ฉางเอ๋อ”</p>
                    <p className="write">ซึ่งเป็นหญิงคนรักของ โฮวอี้ นักยิงธนูแห่งสวรรค์</p>
                    <p className="write">ที่ใช้ธนูยิงดวงอาทิตย์ตกลงไปถึง 9 ดวงจากทั้งหมด 10 ดวง</p>
                    <p className="write">ซึ่งเป็นการกระทำที่ฝ่าฝืนบัญชาสวรรค์จึงโดนลงทัณฑ์ให้ไปใช้ชีวิตธรรมดา</p>
                    <p className="write">เช่น มนุษย์ทั่วไปบนโลกมนุษย์กับฉางเอ๋อ แต่แล้วโฮวอี้ก็ถูกคนสนิททรยศฆ่าตาย</p>
                    <p className="write">ส่วนฉางเอ๋อนางได้ดื่มน้ำอมฤตเพื่อที่จะมีชีวิตอมตะ</p>
                    <p className="write">แล้วเหาะกลับไปยังดวงจันทร์อีกครั้งตามลำพังด้วยความเศร้า</p>
                    
               <hr/>
                </div>
            
        )
    }
}
export default Legend;