import React, { Component } from 'react';
import '../style/fest.css';
import Ellipse3 from '../images/Ellipse3.png' ;
import Ellipse4 from '../images/Ellipse4.png' ;
class Festival extends Component {
    render() {
        return (
            <div className="moonfest">
                <div>
                    <h1 className="festmoon">พิธีไหว้พระจันทร์</h1>
                    <h1 className="festedmoon">(中秋拜月的仪式流程)</h1>
                    <img src={Ellipse3} alt="Ellipse3"/>
                <h1 className="rabbit-fest">กระต่ายบนดวงจันทร์</h1>
                <h1 className="rabbitmoon">(月兔)</h1>
                <img src={Ellipse4} alt="Ellipse4"/>
            

                </div>
            

            </div>
            
            



            );

        }
    }
    export default Festival;