import React, { Component } from 'react';
import '../style/fest.css';
import Ellipse3 from '../images/Ellipse3.png' ;
import Ellipse4 from '../images/Ellipse4.png' ;
import backlast from '../images/backlast.png' ;
class Festival extends Component {
    render() {
        return (
            <div className="moonfest">
                
                <div className="moonfest-left">
                    <h1 className="festmoon">พิธีไหว้พระจันทร์</h1>
                    <h1 className="festedmoon">(中秋拜月的仪式流程)</h1>
                    <img src={Ellipse3} alt="Ellipse3"/>
                    <p>พิธีไหว้พระจันทร์</p>
                    <p>1. ตั้งโต๊ะไหว้บนพื้นที่โล่งที่</p>
                    <p>มองเห็นพระจันทร์ชัดเจน  เช่น</p>
                    <p>ลานหน้าบ้าน หรือดาดฟ้า</p>
                    <p>2. จัดเตรียมโต๊ะเพื่อตั้งของไหว้...</p>
                    <div class="w3-container">
                <p><button class="w3-button w3-black  w3-round-large">อ่านเพิ่มเติม</button></p>
                </div>
                </div>
                <div className="moonfest-right">
                <h1 className="festmoon">กระต่ายบนดวงจันทร์</h1>
                <h1 className="festedmoon">(月兔)</h1>
                <img src={Ellipse4} alt="Ellipse4"/>
                    <p>ตำนานกระต่ายบนดวงจันทร์</p>
                    <p>เล่าว่า มีอยู่ปีหนึ่งในเมืองปักกิ่ง</p>
                    <p>เกิดโรคอหิวาระบาดหนัก</p>
                    <p>เมื่อเทพธิดาฉางเอ๋อซึ่ง</p>
                    <p>อยู่บนดวงจันทร์ได้มองลงมาเห็น...</p>
                    <div class="w3-container">
                <p><button class="w3-button w3-black  w3-round-large">อ่านเพิ่มเติม</button></p>
                </div>
                </div>
                
            </div>
            );

        }
    }
    export default Festival;