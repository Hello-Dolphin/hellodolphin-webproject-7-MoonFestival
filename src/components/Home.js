import React , {Component} from 'react';
import '../style/style.css';
import Lamp1L from '../images/Lamp1L.png';
import Lamp1R from '../images/Lamp1R.png';
class Home extends Component{
    render(){
        return(
            <div className="home">
                <div className="china">
                    <div className="lamp-left">
                        <img src={Lamp1L}/>
                    </div>
                    <div className="text">
                        <h3 className="chin-lang">中秋节</h3>
                        <h3 className="thai-lang">( เ ท ศ ก า ล ไ ห ว้ พ ร ะ จั น ท ร์ )</h3>
                    </div>
                    <div className="lamp-right">
                        <img src={Lamp1R}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;