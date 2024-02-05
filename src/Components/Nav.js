import { Link } from "react-router-dom";

function Nav(){
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li className="pconly" ><a href="#about-section">About</a></li>
                <li className="pconly"><a href="#specials-section">Menu</a></li>
                <li><Link to='/reserve-a-table'>Reservations</Link></li>
                <li className="largeonly"><a href="#specials-section">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;