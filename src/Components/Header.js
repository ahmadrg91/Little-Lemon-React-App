import { Link } from "react-router-dom";

function Header({ children }){
    return (
        <header>
            <Link to="/"><img src="images/logo.jpg" alt="logo"/></Link>
            {children}
        </header>
    )
}

export default Header;