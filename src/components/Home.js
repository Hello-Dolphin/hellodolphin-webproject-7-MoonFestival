import React , {Component} from 'react';
import '../style/style.css';
import Lamp1L from '../images/Lamp1L.png';
import Lamp1R from '../images/Lamp1R.png';
import r3 from '../images/r3.png';
import r4 from '../images/r4.png';
import '../style/resstyle.css';
class Home extends Component{
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
            <div className="bigger-home">
                <div className="home">
                    <div className="china">
                        <div className="lamp-left">
                            <img src={Lamp1L} id="lamp-left"/>
                        </div>
                        <div className="text-of-home">
                            <h3 className="chin-lang">中秋节 <span className="thai-lang">( เ ท ศ ก า ล ไ ห ว้ พ ร ะ จั น ท ร์ )</span> </h3>
                        </div>
                        <div className="lamp-right">
                            <img src={Lamp1R} id="lamp-right"/>
                        </div>
                    </div>
                </div>
                <div className="rabbit">
                    <div>
                        <img src={r4} id="rabbit-left"/>
                    </div>
                    <div>
                        <img src={r3} id="rabbit-right"/>
                    </div>
                </div>
            </div>

        )
    }
}
export default Home;