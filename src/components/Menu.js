import React , {Component} from 'react';
import MenuLogo from '../images/logow1.png';
import '../style/style.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Menu extends Component{
    render(){
        return(
            <div className="navbar">
                <nav class="navbar navbar-light bg-transparent">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
            </div>
        )
    }
}
export default Menu;