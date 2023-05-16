import React from 'react';
import { Link } from 'react-router-dom';

class Switcher extends React.Component {
  render() {
  	return (
        <div id="style-switcher">
            <div>
                <h3>Select your color</h3>
                <ul className="pattern">
                    <li>
                    <Link to="#" className="color1" ></Link>
                    </li>
                    <li>
                    <Link to="#"  className="color2"></Link>
                    </li>
                    <li>
                       <Link to="#" className="color3"></Link>
                    </li>
                    <li>
                       <Link to="#" className="color4"></Link>
                    </li>
                    <li>
                        <Link to="#" className="color5"></Link>
                    </li>
                    <li>
                       <Link to="#"  className="color6"></Link>
                    </li> 
                    <li>
                       <Link to="#" className="color7"></Link>
                    </li>
                    <li>
                       <Link to="#"  className="color8"></Link>
                    </li>                    
                </ul>
            </div>
            <div className="bottom">
            <a href="#" className="settings"><i className="mdi mdi-settings mdi-spin"></i></a>
            </div>
        </div>
  	);
  }
}
export default Switcher;